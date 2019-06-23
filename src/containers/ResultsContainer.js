import React, { Component, Fragment } from 'react';

export default class ResultsContainer extends Component {

  render() {
    let searchResults = Array.from(this.props.searchResults);
    let results = searchResults.map((row,i) => {
      return (
        <Fragment key={i}>
          {/* <div className="grid-item" key={i}>{row.name}</div>
          <div className="grid-item">{i}</div>
          <div className="grid-item">{row.nametype}</div>
          <div className="grid-item">{row.recclass}</div>
          <div className="grid-item">{row.mass}</div>
          <div className="grid-item">{row.fall}</div>
          <div className="grid-item">{row.year}</div>
          <div className="grid-item">{row.reclat}</div>
          <div className="grid-item">{row.reclong}</div> */}
          <div>{row.image_src}</div>
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