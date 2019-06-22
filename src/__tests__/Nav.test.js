import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// components
import Nav from '../components/Nav';

function setup() {
  const wrapper = shallow(<Nav />);
  return wrapper;
}

describe('Testing Nav component', () => {
  it('renders the navigation', () => {
    const nav = document.createElement('nav');
    ReactDOM.render(<Nav />, nav);
    ReactDOM.unmountComponentAtNode(nav);
  });
});