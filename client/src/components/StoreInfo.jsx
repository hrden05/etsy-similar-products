import React from 'react';

function StoreInfo(props) {
  // console.log(props.storeData);

  return (
    <div>
      <img src={props.storeData.logo} alt="" />
      <p>More from</p>
      <h2>{props.storeData.name}</h2>
      <p>See all {props.storeData.items_count} items</p>
      <p>Sales {props.storeData.sales_count}</p>
      <p>On Etsy since {props.storeData.start_year}</p>
      <p>Based in</p>
      <h2>{props.storeData.location}</h2>
    </div>
  );
}

export default StoreInfo;
