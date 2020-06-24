import React from 'react';
import StoreProductItem from './StoreProductItem.jsx';

function StoreProductList(props) {
  // console.log(props);
  return (
    <div className="store-products">
      <ul className='listings'>
        {props.storeProducts.map((product) => {
          return <StoreProductItem product={product} key={product.product_id} />;
        })}
      </ul>
    </div>
  );
}

export default StoreProductList;
