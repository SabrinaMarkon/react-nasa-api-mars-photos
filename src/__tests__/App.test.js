import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// components
import App from '../containers/App';
import SearchContainer from '../containers/SearchContainer';
import ResultsContainer from '../containers/ResultsContainer';

function setup() {
  const wrapper = shallow(<App />);
  //return { wrapper, props }
  return wrapper;
}

describe('Testing main App container', () => {
  it('renders the main App component', () => {
    const fragment = document.createElement('Fragment');
    ReactDOM.render(<App />, fragment);
    ReactDOM.unmountComponentAtNode(fragment);
  });

  it('should render a child Header component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render a child SearchContainer component', () => {
    const wrapper = shallow(<SearchContainer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render a child ResultsContainer component', () => {
    const wrapper = shallow(<ResultsContainer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render a child Footer component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('it should match the App snapshot', () => {
    const wrapper = setup();
    console.log(wrapper);
    expect(wrapper).toMatchSnapshot();
  });
});


