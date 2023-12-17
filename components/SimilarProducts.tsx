// // "use client";
// import React, { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
// import { getSimilarProducts } from "@/lib/actions";

// type props = {
//   productId: string;
// };

// const SimilarProducts = ({ productId }: props) => {
//   const [similarProducts, setSimilarProducts] = useState([]);
//   useEffect(() => {
//     const getSimilarProductsaFun = async () => {
//        const res = await getSimilarProducts(productId);
//       //  console.log(res)
//       setSimilarProducts(res);
//     };
//     getSimilarProductsaFun();
//   }, []);

//   if (similarProducts?.length)
//     return (
//       <section className="px-6 md:px-20 my-20 grid gap-16">
//         <h3 className="text-xl font-semibold">Similar Products</h3>
//         {/* <SimilarProducts /> */}
//         <div className="flex flex-wrap  gap-x-10 gap-y-16">
//           {similarProducts?.map((product,index) => (
//             <ProductCard product={product} key={index} />
//           ))}
//         </div>
//       </section>
//     );
// };

// export default SimilarProducts;
