import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StoreProductList from './StoreProductList.jsx';
import StoreProductItem from './StoreProductItem.jsx';

configure({ adapter: new Adapter() });

describe('Testing <StoreProductList/> Component', () => {
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
    wrapper = shallow(<StoreProductList storeProducts={sampleProducts} />);
  });

  test('render StoreProductList component without throwing an error', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('render StoreProductItem component', () => {
    expect(wrapper.find(StoreProductItem).exists()).toBe(true);
  });
});
