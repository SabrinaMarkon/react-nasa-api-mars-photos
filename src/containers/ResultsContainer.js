import React, { Component } from 'react';

export default class ResultsContainer extends Component {

  render() {
    let searchResults =this.props.searchResults;
    let results = searchResults.map((row,i) => {
      return (
          <figure className="grid-item" key={i}>
            <img src={row['img_src']} className="photo" alt="" />
            <figcaption className="description">
              <div>Martian Sol: {row['sol']}</div>
              <div>Earth Date: {row['earth_date']}</div>
              <div>Camera: {row['camera'].name}</div>
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