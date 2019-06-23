import React, { Component } from 'react';
import Search from '../components/Search';

export default class SearchContainer extends Component {

  constructor(props) {
    super(props);
    this.doSearch = this.doSearch.bind(this);
  }

  doSearch = (cameraInput, solInput) => {
    this.props.doSearch(cameraInput, solInput);
  }

  render() {
    return (
      <div className="center-align pt-2">
        <Search doSearch={this.doSearch} max_sol={this.props.max_sol} />
      </div>
    );
  }
}