'use client';

import styles from './Products.module.scss';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';

import { ProductType } from '@/shared/types';

type ProductsProps = { productsArray: ProductType[] };

const Products = ({ productsArray }: ProductsProps) => {
  return (
    <div className='flex flex-col items-center'>
      <Header />
      <div className={styles.wrapper}>
        {productsArray.length > 0 &&
          productsArray.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Products;
