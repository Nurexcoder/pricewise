"use client";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { CiBookmark, CiShare1, CiShare2 } from "react-icons/ci";
import React, { useState } from "react";
import { allProducts } from "@/utils/constantdata";
import ProductCard from "@/components/ProductCard";

const Product = () => {
  const [isMouseHover, setIsMouseHover] = useState(false);
  

  return (
    <>
      <section className="px-6 md:px-20 my-10 grid gap-16">
        <div className=" gap-20  w-full flex flex-col lg:flex-row justify-between ">
          <div className=" flex-1 rounded border-2 p-8 bg-slate-50 py-28 group/item ">
            <Image
              src={"/assets/images/trending.svg"}
              alt="product image"
              width={450}
              height={400}
              className="mx-auto h-auto group-hover/item:scale-105 transition-all "
            />
          </div>
          <div className="flex-1 p-4 flex flex-col">
            <div className="grid gap-2 pb-6 border-b">
              <h2 className="text-3xl font-semibold ">Product Name</h2>
              <a
                href="https://www.amazon.in/Apple-iPhone-15-Plus-128/dp/B0CHX488V6?ref_=ast_sto_dp&th=1"
                className="text-slate-500 text-sm"
              >
                Visit Product
              </a>
              <div className="flex gap-4 items-center mt-2 ">
                <button
                  className="flex gap-2 items-center text-base bg-red-50 px-4 py-2 rounded text-red-700 transition-all"
                  onMouseOver={() => setIsMouseHover(true)}
                  onMouseLeave={() => setIsMouseHover(false)}
                >
                  {!isMouseHover ? (
                    <FaRegHeart className=" leading-normal" />
                  ) : (
                    <FaHeart />
                  )}
                  <span className="m-0 leading-normal">423</span>
                </button>
                <button className="flex gap-2 items-center text-xl bg-gray-400 px-4 py-2 rounded text-white text-center transition-all">
                  <CiBookmark />
                </button>
                <button className="flex gap-2 items-center text-xl bg-gray-400 px-4 py-2 rounded text-white text-center transition-all">
                  <CiShare2 />
                </button>
              </div>
            </div>
            <div className="py-8 grid grid-cols-4 gap-x-5 gap-y-5">
              <div className="p-6 py-6 col-span-2 bg-gray-200 rounded-xl shadow-md grid gap-2">
                <h4 className="text-black/80">Current Price</h4>
                <div className="flex items-center gap-2 text-2xl font-bold">
                  <Image
                    src={"/assets/icons/price-tag.svg"}
                    alt="price"
                    width={26}
                    height={26}
                  />
                  ₹ 99,999
                </div>
              </div>
              <div className="p-6 py-6 col-span-2 bg-gray-200 rounded-xl shadow-md grid gap-2">
                <h4 className="text-black/80">Average Price</h4>
                <div className="flex items-center gap-2 text-2xl font-bold">
                  <Image
                    src={"/assets/icons/chart.svg"}
                    alt="price"
                    width={26}
                    height={26}
                  />
                  ₹ 99,999
                </div>
              </div>
              <div className="p-6 py-6 col-span-2 bg-gray-200 rounded-xl shadow-md grid gap-2">
                <h4 className="text-black/80">Highest Price</h4>
                <div className="flex items-center gap-2 text-2xl font-bold">
                  <Image
                    src={"/assets/icons/arrow-up.svg"}
                    alt="price"
                    width={26}
                    height={26}
                  />
                  ₹ 99,999
                </div>
              </div>
              <div className="p-6 py-6 col-span-2 bg-gray-200 rounded-xl shadow-md grid gap-2">
                <h4 className="text-black/80">Lowest Price</h4>
                <div className="flex items-center gap-2 text-2xl font-bold">
                  <Image
                    src={"/assets/icons/arrow-down.svg"}
                    alt="price"
                    width={26}
                    height={26}
                  />
                  ₹ 99,999
                </div>
              </div>
              <button className="bg-gray-900 border-gray-900 hover:opacity-95 col-span-4 p-4 text-white rounded-xl uppercase">
                Track
              </button>
            </div>
          </div>
        </div>
        <div className="grid gap-6 grid-cols-1">
          <h3 className="text-xl font-semibold">Product Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            natus veritatis saepe! Modi rem est temporibus accusamus maxime
            harum ratione, maiores neque ducimus, delectus, illum sint eum quos
            inventore beatae voluptas exercitationem commodi ex iusto iure odio
            dignissimos? Inventore qui reprehenderit quam ipsam exercitationem
            veniam deserunt facere, odio quos ullam, quibusdam aspernatur
            doloremque dolorum eaque nam hic ex? Quis dolore blanditiis
            similique repellendus, officiis aliquid voluptate consequatur omnis
            voluptatibus? Molestiae atque nihil voluptates corrupti illum,
            itaque incidunt ullam qui ducimus quisquam culpa unde placeat
            repudiandae voluptas eius doloribus, quae at aliquam blanditiis
            labore accusantium architecto in. Dolore maiores eligendi rerum?
          </p>
          <div className="flex items-center justify-center">
            <button className="bg-gray-900 border-gray-900 hover:opacity-95 text-white rounded-full  py-3 px-8 flex items-center gap-x-2 ">
              <Image
                src={"/assets/icons/bag.svg"}
                alt="bag"
                width={20}
                height={20}
              />
              Buy Now
            </button>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-20 my-20 grid gap-16">
        <h3 className="text-xl font-semibold">Similar Products</h3>
        {/* <SimilarProducts /> */}
        {/* <div className="flex flex-wrap  gap-x-10 gap-y-16">
          {allProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div> */}
      </section>
    </>
  );
};

export default Product;
