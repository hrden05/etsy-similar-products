import React from 'react';
import { shallow } from 'enzyme';
import StoreInfo from './StoreInfo.jsx';

describe('Testing <StoreInfo/> Component', () => {
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
});
