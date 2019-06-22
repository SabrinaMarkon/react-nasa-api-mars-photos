import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// components
import ResultsContainer from '../containers/ResultsContainer';
import ResultHeadings from '../components/ResultHeadings';
import ResultRow from '../components/ResultRow';

function setup() {
  const wrapper = shallow(<ResultsContainer />);
  return wrapper;
}

describe('Testing ResultsContainer component', () => {
  it('renders the search results box', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a child ResultHeading component', () => {
    const wrapper = shallow(<ResultHeadings />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render a child ResultRow', () => {
    const wrapper = shallow(<ResultRow />);
    expect(wrapper.exists()).toBe(true);
  });
});