"use client";

import styles from "./Products.module.scss";
import ProductCard from "@/components/ProductCard";
import { MOCK_ITEMS } from "@/constants/constants";
import Header from "@/components/Header";

const Products = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className={styles.wrapper}>
        {MOCK_ITEMS.length > 0 &&
          MOCK_ITEMS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Products;
