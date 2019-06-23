import React, { Component, Fragment } from 'react';

export default class ResultsContainer extends Component {

  render() {
    let searchResults = Array.from(this.props.searchResults);
    console.log(searchResults);
    let results = searchResults.map((row,i) => {
      return (
        <Fragment key={i}>
          <div className="grid-item" key={i}>{row.image_src}</div>
        </Fragment>
      );
    }
    );
    return (
    <section className="grid center-align p-2">
      {results}
    </section>
    );
  }
}