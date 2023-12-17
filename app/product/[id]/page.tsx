import Image from "next/image";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { CiBookmark, CiShare1, CiShare2 } from "react-icons/ci";
import React, { useState } from "react";
import { allProducts } from "@/utils/constantdata";
import ProductCard from "@/components/ProductCard";
import { getProductById, getSimilarProducts } from "@/lib/actions";
import HeartHoverButton from "@/components/global/HeartHoverButton";
import { formatNumberBasedOnCurrency } from "@/lib/utils";
import PriceInfoCard from "@/components/global/PriceInfoCard";
import Link from "next/link";
import TrackModal from "@/components/TrackModal";
import { useRouter } from "next/navigation";
// import SimilarProducts from "@/components/SimilarProducts";

type Props = {
  params: {
    id: string;
  };
};
const Product = async ({ params: { id } }: Props) => {
  // const [isMouseHover, setIsMouseHover] = useState(false);
  // const router = useRouter();
  const productData = await getProductById(id);
  // if(!productData) {
  //   router.push('/404')
  // }
  const similarProducts = await getSimilarProducts(id);
  // console.log("hi")
  return (
    <>
      <section className="px-6 md:px-20 my-10 grid gap-16">
        <div className=" gap-20  w-full flex flex-col lg:flex-row justify-between ">
          <div className=" flex-1 rounded border-2 p-8 bg-slate-50 py-28 group/item ">
            <Image
              src={productData?.image}
              alt="product image"
              width={450}
              height={400}
              className="mx-auto h-auto group-hover/item:scale-105 object-fit transition-all mix-blend-multiply "
            />
          </div>
          <div className="flex-1 p-4 flex flex-col">
            <div className="grid gap-2 pb-6 border-b">
              <h2 className="text-3xl font-semibold ">{productData.title}</h2>
              <a href={productData.url} className="text-slate-500 text-sm">
                Visit Product
              </a>
              <div className="flex gap-4 items-center mt-2 ">
                <HeartHoverButton content={productData.reviewsCount} />
                <button className="flex gap-2 items-center text-xl bg-gray-400 px-4 py-2 rounded text-white text-center transition-all">
                  <CiBookmark />
                </button>
                <button className="flex gap-2 items-center text-xl bg-gray-400 px-4 py-2 rounded text-white text-center transition-all">
                  <CiShare2 />
                </button>
              </div>
            </div>
            <div className="py-8 grid  grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-5">
              <PriceInfoCard
                title="Current Price"
                price={productData.currentPrice}
                currency={productData.currency}
                iconSrc="/assets/icons/price-tag.svg"
              />
              <PriceInfoCard
                title="Average Price"
                price={productData.averagePrice}
                currency={productData.currency}
                iconSrc="/assets/icons/chart.svg"
              />

              <PriceInfoCard
                title="Highest Price"
                price={productData.highestPrice}
                currency={productData.currency}
                iconSrc="/assets/icons/arrow-up.svg"
              />
              <PriceInfoCard
                title="Lowest Price"
                price={productData.lowestPrice}
                currency={productData.currency}
                iconSrc="/assets/icons/arrow-down.svg"
              />
              <TrackModal productId={id} />
            </div>
          </div>
        </div>
        <div className="grid gap-6 grid-cols-1">
          <h3 className="text-xl font-semibold">Product Description</h3>
          <p>{productData?.description}</p>
          <div className="flex items-center justify-center">
            <Link href={productData?.url} target="_blank">
              <button className="bg-gray-900 border-gray-900 hover:opacity-95 text-white rounded-full  py-3 px-8 flex items-center gap-x-2 ">
                <Image
                  src={"/assets/icons/bag.svg"}
                  alt="bag"
                  width={20}
                  height={20}
                />
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-20 my-20 grid gap-16">
        <h3 className="text-xl font-semibold">Similar Products</h3>
        {/* <SimilarProducts /> */}
        <div className="flex flex-wrap  gap-x-10 gap-y-16">
          {similarProducts?.map((product ) => {
            // product._id = product?._id?.toString()||"";
            return <ProductCard product={product} key={product._id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Product;
