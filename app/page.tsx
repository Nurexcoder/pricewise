import HeroCourosel from "@/components/HeroCourosel";
import ProductCard from "@/components/ProductCard";
import Products from "@/components/ProductCard";
import { allProducts } from "@/utils/constantdata";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24  ">
        <div className="flex max-xl:flex-col justify-between gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart shopping starts here
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="logo"
                width={16}
                height={16}
              />
            </p>
            <h1 className="head-text">
              Unleash the Power of <br />
              <span className="text-primary">ShopWise</span>
            </h1>
            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>
            <div className="flex items-center gap-x-6">
              <input className="searchbar-input" type="text" />
              <button className="searchbar-btn">Search</button>
            </div>
          </div>
          <HeroCourosel />
        </div>
      </section>
      <section className="px-6 md:px-20 my-10 gap-20  w-full flex flex-col">
        <h3 className="text-4xl font-medium">Trending</h3>
        <div className="flex flex-wrap  gap-x-10 gap-y-16">
          {allProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
