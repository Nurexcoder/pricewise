import axios from "axios";
import * as cheerio from "cheerio";
import { extractCurrency, extractDescription, extractPrice } from "../utils";

export async function scrapeAmazonProduct(url: string) {
  if (!url) return;
  //brightData proxy configuration
  const username = String(process.env.BRIGHT_DATA_USERNAME);
  const password = String(process.env.BRIGHT_DATA_PASSWORD);
  const port = 22225;
  const session_id = (10000 * Math.random()) | 0;
  const options = {
    auth: {
      username: `${username}-${session_id}`,
      password,
    },
    host: "brd.superproxy.io",
    port,
    rejectUnauthorized: false,
  };

  try {
    const response = await axios(url, options);
    const $ = cheerio.load(response.data);
    const title = $("#productTitle").text().trim();
    const currentPrice = extractPrice(
      $(".priceToPay span.a-price-whole"),
      $(".a.size.base.a-color-price"),
      $("a-button-selected .a-color-base"),
      $(".a-price.a-text-price")
    );
    const originalPrice = extractPrice(
      $("#priceblock_ourprice"),
      $(".a-price.a-text-price span.a-offscreen"),
      $("#listPrice"),
      $("#priceblock_dealprice"),
      $(".a-size-base.a-color-price")
    );
    const isOutOfStock =
      $("#availability .span").text().trim().toLocaleLowerCase() ===
      "currently unavailable";
    const images =
      $("#landingImage").attr("data-a-dynamic-image") ||
      $("#imgBlkFront").attr("data-a-dynamic-image") ||
      "{}";
    const imageUrls = Object.keys(JSON.parse(images));
    const currency = extractCurrency($(".a-price-symbol"));
    const discountRate = $('.savingsPercentage').text().replace(/[-%]/g, "");
    const description = extractDescription(
      $
    );
    const data={
      url,
      currency,
      title,
      image:imageUrls[0],
      currentPrice:Number(currentPrice)||Number(originalPrice),
      originalPrice:Number(originalPrice)||Number(currentPrice),
      priceHistory:[],
      discountRate:Number(discountRate),
      isOutOfStock,
      category:'category',
      reviewsCount:0,
      stars:0,
      lowestPrice:Number(currentPrice)||Number(originalPrice),
      highestPrice:Number(originalPrice)||Number(currentPrice),
      averagePrice:Number(originalPrice)||Number(currentPrice),
      description
    }
    return data
  } catch (error: any) {
    throw new Error("Failed to scrape and store product: " + error?.message);
  }
}
