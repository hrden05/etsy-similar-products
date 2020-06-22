import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StoreInfo from './StoreInfo.jsx';

configure({ adapter: new Adapter() });

describe('Testing <StoreInfo/> COmponent', () => {
  let wrapper;

  const sampleStore = {
    _id: 'abc123',
    name: 'Etsy Store',
    store_id: 200,
    logo: 'https://i.etsystatic.com/isla/362517/41194900/isla_140x140.41194900_5nj8y8kp.jpg?version=0',
    items_count: 50,
    sales_count: 900,
    start_year: 2010,
    location: 'New York, NY',
  };

  beforeEach(() => {
    wrapper = shallow(<StoreInfo storeData={sampleStore} />);
  });

  test('render StoreInfo component without throwing an error', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('render store logo', () => {
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('img').prop('src')).toEqual('https://i.etsystatic.com/isla/362517/41194900/isla_140x140.41194900_5nj8y8kp.jpg?version=0');
  });

  test('render store name', () => {
    expect(wrapper.find('.store-name').text()).toBe('Etsy Store');
  });

  test('render store item count', () => {
    expect(wrapper.find('.store-item-count').text()).toBe('See all 50 items');
  });

  test('render store sales count', () => {
    expect(wrapper.find('.store-sales-count').text()).toBe('Sales 900');
  });

  test('render store start year', () => {
    expect(wrapper.find('.store-start-year').text()).toBe('On Etsy since 2010');
  });

  test('render store location', () => {
    expect(wrapper.find('.store-location').text()).toBe('New York, NY');
  });
});
