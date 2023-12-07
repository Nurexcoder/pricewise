import React from "react";
import { Product } from "@/types";
import Image from "next/image";

interface props {
  product: Product;
}
const ProductCard = ({ product }: props) => {
  return (
    <div className="flex items-center flex-col gap-y-4">
      <div className=" bg-slate-200 p-4 group/item rounded">
        <Image
          src={product.image}
          alt={product.title}
          width={250}
          height={250}
          className="group-hover/item:scale-105 transition-all"
        />
      </div>
      <div className="flex flex-col w-full">
        <h4 className="text-2xl font-semibold">{product.title}</h4>
        <div className="flex justify-between items-center">
          <p className="text-xl text-gray-400">
            General
          </p>
          <p className="text-secondary">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
