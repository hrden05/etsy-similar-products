import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import App from './App.jsx';
import StoreSection from './StoreSection.jsx';
import StoreProductList from './StoreProductList.jsx';

describe('Testing <App/> Component', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('render App component without throwing an error', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('render StoreSection components', () => {
    expect(wrapper.find(StoreSection).exists()).toBe(true);
    // expect(wrapper.find(StoreProductList).exists()).toBe(true);
  });
});

// jest.mock('axios');

// describe('Testing <App/> Axios', () => {
//   test('trying test 1', async () => {
//     axios.get.mockResolvedValue({
//       data: {
//         category: "misc",
//         image: "http://lorempixel.com/234/186/people",
//         name: "Refined Frozen Shoes",
//         price: 249,
//         product_id: 93,
//         shipping: "",
//         sponsored: true,
//         store: "5ef3a379190fb5457a3b296c",
//         store_id: 10,
//         _id: "5ef3a379190fb5457a3b29c9"
//       },
//     });

//     await App.prototype.componentDidMount();
//     expect(axios.get).toBeCalledWith(`api/products/93`);
//   });
// });
