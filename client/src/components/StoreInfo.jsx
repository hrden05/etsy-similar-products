import React from 'react';

function StoreInfo(props) {
  // console.log(props.storeData);

  return (
    <div>
      <img src={props.storeData.logo} alt="" />
      <p>More from</p>
      <h2 className="store-name">{props.storeData.name}</h2>
      <p className="store-item-count">See all {props.storeData.items_count} items</p>
      <p className="store-sales-count">Sales {props.storeData.sales_count}</p>
      <p className="store-start-year">On Etsy since {props.storeData.start_year}</p>
      <p>Based in</p>
      <h2 className="store-location">{props.storeData.location}</h2>
    </div>
  );
}

export default StoreInfo;
