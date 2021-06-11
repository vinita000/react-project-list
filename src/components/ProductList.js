import React from 'react';
import ProductCard from './ProductCard';
import productlist from '../productlist';

const ProductList = () => {
  return (
    <div>
      {productlist.map((product) => <ProductCard product={product}/>)}
    </div>

  );
}

export default ProductList;