import React, { Component } from 'react';

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchinput: '',
      searchfield: 'name'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    let searchinput = (event.target.value);
    this.setState({
      searchinput
    });
  }

  handleSelected = event => {
    let searchfield = (event.target.value);
    this.setState({
      searchfield
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.doSearch(this.state.searchfield, this.state.searchinput);
  }

  render() {
    return (
    <form>
      <select className="form-input" value={this.state.searchfield} onChange={this.handleSelected}>
        <option value="name">Name</option>
        <option value="nametype">Name Type</option>
        <option value="recclass">Rec Class</option>
        {/* <option value="mass">Mass (g)</option> */}
        <option value="fall">Fall</option>
        {/* <option value="year">Year</option> */}
        <option value="reclat">Latitude</option>
        <option value="reclong">Longitude</option>
      </select>
      <input
        className="form-input"
        type="text"
        value={this.state.searchinput}
        onChange={this.handleChange}
      />
      <button className="form-input" type="button" onClick={this.handleSubmit}>Search!</button>
    </form>
    )
  }
}