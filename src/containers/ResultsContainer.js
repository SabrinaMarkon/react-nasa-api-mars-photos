import React, { Component } from 'react';

export default class ResultsContainer extends Component {

  render() {
    let searchResults =this.props.searchResults;
    let results = searchResults.map((row,i) => {
      return (
          <figure className="grid-item" key={i}>
            <img src={row['img_src']} className="photo" alt="" />
            <figcaption className="description">
              <div>Martian Sol: <span className="fieldvalue">{row['sol']}</span></div>
              <div>Earth Date: <span className="fieldvalue">{row['earth_date']}</span></div>
              <div>Camera: <span className="fieldvalue">{row['camera'].name}</span></div>
            </figcaption>
          </figure>
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