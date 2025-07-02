"use client ";
import Image from "next/image";

import { ProductType } from "@/shared/types";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { title, origin, price, currency, imageUrl } = product;

  const priceFormatted = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(price / 100);

  return (
    <div className="w-full sm:w-64 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex flex-col border border-gray-200">
      <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
        <Image
          src={imageUrl}
          alt={title}
          width={200}
          height={300}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-4">Страна: {origin}</p>
        <div className="mt-auto">
          <p className="text-xl font-bold text-indigo-500">{priceFormatted}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
