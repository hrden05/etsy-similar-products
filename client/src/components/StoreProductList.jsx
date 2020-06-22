import React from 'react';
import StoreProductItem from './StoreProductItem.jsx';

function StoreProductList(props) {
  // console.log(props);
  return (
    <div>
      {props.storeProducts.map((product) => {
        return <StoreProductItem product={product} key={product.product_id} />;
      })}
    </div>
  );
}

export default StoreProductList;
