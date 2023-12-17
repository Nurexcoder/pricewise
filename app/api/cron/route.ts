import { connectToDB } from "@/lib/db";
import Product from "@/lib/db/models/product.model";
import { generateEmailContent, sendMail } from "@/lib/nodemailer";
import { scrapeAmazonProduct } from "@/lib/scrapper";
import {
  getAveragePrice,
  getEmailNotifType,
  getHighestPrice,
  getLowestPrice,
} from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    const products = await Product.find();
    if (!products) {
      throw new Error("No products found");
    }
    const updatedProducts = await Promise.all(
      products.map(async (currentProduct) => {
        const scrapedProduct = await scrapeAmazonProduct(currentProduct.url);
        let product = scrapedProduct;
        if (!scrapedProduct) throw new Error("Failed to scrape product");
        const updatedProductPriceHistory: any = [
          ...currentProduct.priceHistory,
          {
            price: scrapedProduct.currentPrice,
            date: new Date(),
          },
        ];

        product = {
          ...scrapedProduct,
          priceHistory: updatedProductPriceHistory,
          lowestPrice: getLowestPrice(updatedProductPriceHistory),
          highestPrice: getHighestPrice(updatedProductPriceHistory),
          averagePrice: getAveragePrice(updatedProductPriceHistory),
          isOutOfStock: updatedProductPriceHistory.isOutOfStock,
        };
        const updatedProduct = await Product.findOneAndUpdate(
          { url: scrapedProduct.url },
          product,
          { new: true, upsert: true }
        );

        const emailNotifType = getEmailNotifType(
          updatedProduct,
          currentProduct
        );

        if (emailNotifType && updatedProduct?.users?.length > 0) {
          const productInfo = {
            title: updatedProduct.title,
            url: updatedProduct.url,
          };
          const emailContent = await generateEmailContent(
            productInfo,
            emailNotifType
          );
          const userEmails = updatedProduct.users.map(
            (user: any) => user.email
          );
          await sendMail(emailContent, userEmails);
        }

        return updatedProduct;
      })
    );
    return NextResponse.json({ message: "Ok", data: updatedProducts });

    // return scrapedProduct
  } catch (error) {
    console.log(error);
  }
}
