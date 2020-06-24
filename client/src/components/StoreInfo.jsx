import React from 'react';

function StoreInfo(props) {
  // console.log(props.storeData);

  return (
    <div className="store-info">
      <div className="store-logo">
        <img src={props.storeData.logo} alt="" className="logo-image" />
      </div>
      <div className="more-from">
        <p className="text-caption black">More from</p>
        <h2 className="text-heading link store-name">{props.storeData.name}</h2>
        <p className="text-caption heavy-weight black store-item-count">
          <span>See all {props.storeData.items_count} items</span>
          <span className="arrow">&#x2192;</span>
        </p>
      </div>
      <div className="shop-stats">
        <div className="sales stats-box">
          <p className="text-caption gray">Sales</p>
          <p className="text-body black store-sales-count">{props.storeData.sales_count}</p>
        </div>
        <div className="year stats-box">
          <p className="text-caption gray">On Etsy since</p>
          <p className="text-body black store-start-year">{props.storeData.start_year}</p>
        </div>
      </div>
      <div className="based-in">
        <p className="text-caption gray">Based in</p>
        <h2 className="text-body black store-location">{props.storeData.location}</h2>
      </div>
    </div>
  );
}

export default StoreInfo;
