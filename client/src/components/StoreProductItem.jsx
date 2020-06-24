import React from 'react';

function StoreProductItem(props) {
  // console.log('props from SPI', props);

  return (
    <li className="merch-item">
      <div className="listing-image-container">
        <img src={props.product.image} alt="" className="listing-image" />
      </div>
      <div className="listing-card">
        <h3 className="product-name text-caption truncate">{props.product.name}</h3>
        <p className="text-title">
          <span className="currency-symbol heavy-weight">$</span>
          <span className="currency-value heavy-weight">{props.product.price}.00</span>
          <span className="shipping-container">
            {!props.product.shipping ? <span /> : <span className={(props.product.shipping === 'FREE shipping') ? 'shipping-free' : 'shipping-eligible'}>{props.product.shipping}</span>}
          </span>
        </p>
      </div>
    </li>
  );
}

export default StoreProductItem;
