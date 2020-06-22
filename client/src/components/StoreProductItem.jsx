import React from 'react';

function StoreProductItem(props) {
  // console.log('props from SPI', props);

  return (
    <ul>
      <li>
        <img src={props.product.image} alt="" />
        <p className="product-name">{props.product.name}</p>
        <p className="product-price">${props.product.price}</p>
      </li>
    </ul>
  );
}

export default StoreProductItem;
