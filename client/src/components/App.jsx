import React from 'react';

import StoreInfo from './StoreInfo.jsx';
import StoreProductList from './StoreProductList.jsx';

const sampleStore = {
  _id: 'abcd123',
  name: 'Etsy Store',
  store_id: 200,
  logo: 'https://i.etsystatic.com/isla/362517/41194900/isla_140x140.41194900_5nj8y8kp.jpg?version=0',
  items_count: 50,
  sales_count: 900,
  start_year: 2010,
  location: 'New York, NY',
};

const sampleProducts = [{
  _id: 'abcd123',
  name: 'Fine Art. Cactus',
  product_id: 550,
  price: 75.00,
  image: 'https://i.etsystatic.com/15009915/c/1886/1498/554/903/il/49175a/1663894442/il_340x270.1663894442_5mxm.jpg',
  shipping: 'FREE Shipping',
  sponsored: false,
  category: 'Art',
  store_id: 200,
  store: 'abcd123',
},
{
  _id: 'abcd123',
  name: 'Fine Art. Butter',
  product_id: 551,
  price: 85.00,
  image: 'https://i.etsystatic.com/18884691/d/il/5308f6/2240464674/il_340x270.2240464674_kf3o.jpg?version=0',
  shipping: 'FREE Shipping',
  sponsored: false,
  category: 'Art',
  store_id: 200,
  store: 'abcd123',
},
{
  _id: 'abcd123',
  name: 'Fine Art. Cactus',
  product_id: 552,
  price: 75.00,
  image: 'https://i.etsystatic.com/15009915/c/1886/1498/554/903/il/49175a/1663894442/il_340x270.1663894442_5mxm.jpg',
  shipping: 'FREE Shipping',
  sponsored: false,
  category: 'Art',
  store_id: 200,
  store: 'abcd123',
},
{
  _id: 'abcd123',
  name: 'Fine Art. Butter',
  product_id: 553,
  price: 85.00,
  image: 'https://i.etsystatic.com/18884691/d/il/5308f6/2240464674/il_340x270.2240464674_kf3o.jpg?version=0',
  shipping: 'FREE Shipping',
  sponsored: false,
  category: 'Art',
  store_id: 200,
  store: 'abcd123',
},
{
  _id: 'abcd123',
  name: 'Fine Art. Cactus',
  product_id: 554,
  price: 75.00,
  image: 'https://i.etsystatic.com/15009915/c/1886/1498/554/903/il/49175a/1663894442/il_340x270.1663894442_5mxm.jpg',
  shipping: 'FREE Shipping',
  sponsored: false,
  category: 'Art',
  store_id: 200,
  store: 'abcd123',
},
{
  _id: 'abcd123',
  name: 'Fine Art. Butter',
  product_id: 555,
  price: 85.00,
  image: 'https://i.etsystatic.com/18884691/d/il/5308f6/2240464674/il_340x270.2240464674_kf3o.jpg?version=0',
  shipping: 'FREE Shipping',
  sponsored: false,
  category: 'Art',
  store_id: 200,
  store: 'abcd123',
},
{
  _id: 'abcd123',
  name: 'Fine Art. Cactus',
  product_id: 556,
  price: 75.00,
  image: 'https://i.etsystatic.com/15009915/c/1886/1498/554/903/il/49175a/1663894442/il_340x270.1663894442_5mxm.jpg',
  shipping: 'FREE Shipping',
  sponsored: false,
  category: 'Art',
  store_id: 200,
  store: 'abcd123',
},
{
  _id: 'abcd123',
  name: 'Fine Art. Butter',
  product_id: 567,
  price: 85.00,
  image: 'https://i.etsystatic.com/18884691/d/il/5308f6/2240464674/il_340x270.2240464674_kf3o.jpg?version=0',
  shipping: 'FREE Shipping',
  sponsored: false,
  category: 'Art',
  store_id: 200,
  store: 'abcd123',
},
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      storeData: sampleStore,
      storeProducts: sampleProducts,
    };
  }

  render() {
    return (
      <div>
        <h1>Hello from App</h1>
        <StoreInfo storeData={this.state.storeData} />
        <StoreProductList storeProducts={this.state.storeProducts} />
      </div>
    );
  }
}

export default App;
