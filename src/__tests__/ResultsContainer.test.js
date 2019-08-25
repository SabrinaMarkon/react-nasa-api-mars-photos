import React from 'react';
import { shallow } from 'enzyme';

// components
import ResultsContainer from '../containers/ResultsContainer';
import Result from '../components/Result';

function setup () {
    const wrapper = shallow(<ResultsContainer />);
    return wrapper;
}

describe('Testing ResultsContainer component', () => {
    it('renders the search results box', () => {
        const wrapper = setup();
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a child Result', () => {
        const wrapper = shallow(<Result />);
        expect(wrapper.exists()).toBe(true);
    });
});
