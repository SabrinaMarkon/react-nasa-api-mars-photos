import React from 'react';
import ReactDOM from 'react-dom';

// components
import Search from '../components/Search';

function setup() {
  const wrapper = shallow(<Search />);
  return wrapper;
}

describe('Testing search form component', () => {
  it('should match the Search form snapshot', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  })
});