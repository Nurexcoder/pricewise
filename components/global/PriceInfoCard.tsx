import { formatNumberBasedOnCurrency } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
    title: string;
    price: number;
    currency: string;
    iconSrc: string;
}

const PriceInfoCard = ({title,price,currency,iconSrc}: Props) => {
  return (
    <div className="p-6 py-6 col-span-2 bg-gray-200 rounded-xl shadow-md grid gap-2">
      <h4 className="text-black/80">{title}</h4>
      <div className="flex items-center gap-2 text-2xl font-bold">
        <Image
          src={iconSrc}
          alt="price"
          width={26}
          height={26}
        />
        {formatNumberBasedOnCurrency(
          price,
          currency
        )}
      </div>
    </div>
  );
};

export default PriceInfoCard;
