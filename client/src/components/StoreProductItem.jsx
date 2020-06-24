import React from 'react';

function StoreProductItem(props) {
  // console.log('props from SPI', props);

  return (
    <li className="merch-item">
      <div className="listing-image">
        <img src={props.product.image} alt="" className="image" />
      </div>
      <div className="listing-card">
        <h3 className="product-name text-caption truncate">{props.product.name}</h3>
        <p className="text-title">
          <span className="currency-symbol">$</span>
          <span className="currency-value">{props.product.price}.00</span>
          <span className="shipping">{props.product.shipping}</span>
        </p>
      </div>
    </li>
  );
}

export default StoreProductItem;
