"use client";
import { scrapeAndStoreProducts } from "@/lib/actions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const isValidAmazonProductUrl = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;

    if (hostname?.includes("amazon")) {
      return true;
    }
  } catch (error) {
    return false;
  }
  return false;
};
const SearchComponent = () => {
  const [searchInput, setSearchInput] = useState("");
  const [loadingSearch, setLoadingSearch] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidLink = isValidAmazonProductUrl(searchInput);
    if (!isValidLink) {
      toast.error("Please enter a valid Amazon product link");
      return;
    }
    try {
      setLoadingSearch(true);
      const productId = await scrapeAndStoreProducts(searchInput);
      if (!productId) return;
      router.push(`/product/${productId}`);
      
    } catch (error) {
    } finally {
      setLoadingSearch(false);
    }
    console.log(searchInput);
  };
  return (
    <form className="flex items-center gap-x-6 mt-2" onSubmit={handleSubmit}>
      <input
        className="searchbar-input"
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button
        className="searchbar-btn "
        type="submit"
        disabled={loadingSearch || !searchInput}
      >
        {loadingSearch ? "Searching..." : "Search"}
      </button>
      <ToastContainer />
    </form>
  );
};

export default SearchComponent;
