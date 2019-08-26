import React, { Component } from 'react';
import Result from '../components/Result';
import PropTypes from 'prop-types';

export default class ResultsContainer extends Component {
    render () {
        let searchResults = this.props.searchResults;
        let results = searchResults.map((row, i) => {
            return (
                <Result key={i} row={row} />
            );
        }
        );
        return (
            <section className="grid">
                {results}
            </section>
        );
    }
}

ResultsContainer.propTypes = {
    searchResults: PropTypes.array
};
