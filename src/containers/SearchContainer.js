import React, { Component } from 'react';
import Search from '../components/Search';

export default class SearchContainer extends Component {

  constructor(props) {
    super(props);
    this.doSearch = this.doSearch.bind(this);
  }

  doSearch = (searchfield, searchinput) => {
    this.props.doSearch(searchfield, searchinput);
  }

  render() {
    return (
      <div className="center-align pt-2">
        <Search doSearch={this.doSearch} />
      </div>
    );
  }
}