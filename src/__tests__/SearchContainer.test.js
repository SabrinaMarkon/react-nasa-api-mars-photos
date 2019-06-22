import React from 'react';
import ReactDOM from 'react-dom';

// components
import SearchContainer from '../containers/SearchContainer';
import Search from '../components/Search';

function setup() {
  const wrapper = shallow(<SearchContainer />);
  return wrapper;
}

describe('Testing the SearchContainer component', () => {
  it('renders the SearchContainer box', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a child Search component', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.exists()).toBe(true);
  });
});