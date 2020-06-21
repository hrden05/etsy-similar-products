import React from 'react';

function StoreProductItem(props) {
  // console.log('props from SPI', props);

  return (
    <ul>
      <li>
        <img src={props.product.image} alt="" />
        <p>{props.product.name}</p>
        <p>${props.product.price}</p>
      </li>
    </ul>
  );
}

export default StoreProductItem;
