"use server";

import mongoose from "mongoose";
import { revalidatePath } from "next/cache";
import { connectToDB } from "../db";
import { scrapeAmazonProduct } from "../scrapper";
import Product from "../db/models/product.model";
import { getAveragePrice, getHighestPrice, getLowestPrice } from "../utils";

export async function scrapeAndStoreProducts(productUrl: string) {
  if (!productUrl) return;
  try {
    connectToDB();
    const scrapedProduct = await scrapeAmazonProduct(productUrl);
    if (!scrapedProduct) return;

    let product = scrapedProduct;
    const existingProduct = await Product.findOne({ url: scrapedProduct.url });

    if (existingProduct) {
      const updatedProduct: any = [
        ...existingProduct.priceHistory,
        {
          price: scrapedProduct.currentPrice,
          date: new Date(),
        },
      ];
      product = {
        ...scrapedProduct,
        priceHistory: updatedProduct,
        lowestPrice: getLowestPrice(updatedProduct),
        highestPrice: getHighestPrice(updatedProduct),
        averagePrice: getAveragePrice(updatedProduct),
        isOutOfStock: updatedProduct.isOutOfStock,
      };
    }
    const newProduct = await Product.findOneAndUpdate(
      { url: scrapedProduct.url },
      product,
      { new: true, upsert: true }
    );
    revalidatePath(`/product/${newProduct?._id}`);
  } catch (error: any) {
    console.log(error);
    throw new Error("Failed to scrape and store product: " + error?.message);
  }
}

export async function getProductById(productId: string) {
  try {
    connectToDB();
    const product = await Product.findById(productId);
    return product;
  } catch (error: any) {
    console.log(error);
    throw new Error("Failed to get product: " + error?.message);
  }
}

export async function getAllProducts(){
  try {
    connectToDB();
    const products = await Product.find({});
    return products;
  } catch (error: any) {
    console.log(error);
    throw new Error("Failed to get products: " + error?.message);
  }
}
