// "use client";
import React, { useState } from "react";
import { Product } from "@/types";
import Image from "next/image";
import { stringShortener } from "@/lib/utils";
import { Tooltip } from "@mui/joy";
import Link from "next/link";

interface props {
  product: Product;
}
const ProductCard = ({ product }: props) => {
  return (
    <Link href={`/product/${product._id}`}>
      <div className="flex items-center  flex-col gap-y-4">
        <div className=" bg-slate-200 p-4 group/item rounded">
          <div className="flex justify-center items-center p-4 bg-white">
            <Image
              src={product.image}
              alt={product.title}
              width={250}
              height={250}
              className="group-hover/item:scale-105 w-60 h-60 object-scale-down mix-blend-multiply transition-all"
            />
          </div>
        </div>
        <div className="flex flex-col w-full gap-2">
          <Tooltip title={product.title}>
            <h4 className="text-xl font-semibold">
              {stringShortener(product.title, 20)}
            </h4>
          </Tooltip>
          <div className="flex justify-between items-center">
            <p className=" text-gray-400">General</p>
            <p className="text-secondary text-base">
              {product.currency + " " + product.currentPrice}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
