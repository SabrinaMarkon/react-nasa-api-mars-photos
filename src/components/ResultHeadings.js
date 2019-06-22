import React, { Component } from 'react';

export default class ResultHeadings extends Component {

  render() {
    return (
      <>
      <div className="grid-item grid-heading">Name</div>
      <div className="grid-item grid-heading">Id</div>
      <div className="grid-item grid-heading">Name Type</div>
      <div className="grid-item grid-heading">Rec Class</div>
      <div className="grid-item grid-heading">Mass (g)</div>
      <div className="grid-item grid-heading">Fall</div>
      <div className="grid-item grid-heading">Year</div>
      <div className="grid-item grid-heading">Latitude</div>
      <div className="grid-item grid-heading">Longitude</div>
      </>
    );
  }
}