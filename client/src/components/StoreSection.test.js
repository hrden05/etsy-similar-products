import React from 'react';
import { shallow } from 'enzyme';
import StoreSection from './StoreSection.jsx';
import StoreInfo from './StoreInfo.jsx';
import StoreProductList from './StoreProductList.jsx';

describe('Testing <StoreSection/> Component', () => {
  let wrapper;

  const sampleProducts = [{
    _id: '123abc',
    name: 'Fine Art. Cactus',
    product_id: 550,
    price: 75.00,
    image: 'https://i.etsystatic.com/6507355/r/il/58ee24/905514140/il_1140xN.905514140_17k6.jpg',
    shipping: 'FREE Shipping',
    sponsored: false,
    category: 'Art',
    store_id: 200,
    store: '456def',
  },
  {
    _id: '123abc',
    name: 'Fine Art. Cactus',
    product_id: 550,
    price: 75.00,
    image: 'https://i.etsystatic.com/6507355/r/il/58ee24/905514140/il_1140xN.905514140_17k6.jpg',
    shipping: 'FREE Shipping',
    sponsored: false,
    category: 'Art',
    store_id: 200,
    store: '456def',
  },
  ];

  beforeEach(() => {
    wrapper = shallow(<StoreSection storeProducts={sampleProducts} />);
  });

  test('render StoreSection component without throwing an error', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('render StoreInfo and StoreProductList components', () => {
    expect(wrapper.find(StoreInfo).exists()).toBe(true);
    expect(wrapper.find(StoreProductList).exists()).toBe(true);
  });
});