import React, { Component } from 'react';

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      solInput: this.props.max_sol,
      cameraInput: ''
    }
    this.handleSolChange = this.handleSolChange.bind(this);
    // this.handleSelected = this.handleSelected.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSolChange = event => {
    let solInput = (event.target.value);
    let originalSolInput = solInput;
    solInput = originalSolInput.replace(/\D/g,'');
    if (solInput < 0 || solInput > this.props.max_sol || solInput !== originalSolInput) {
      solInput = this.props.max_sol;
    }
    this.setState({
      solInput
    });
  }

  // handleSelected = event => {
  //   let searchfield = (event.target.value);
  //   this.setState({
  //     searchfield
  //   });
  // }

  handleSubmit = event => {
    event.preventDefault();
    this.props.doSearch(this.state.cameraInput, this.state.solInput);
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
      <label htmlFor="solInput" className="searchlabel">Sol:</label>
      <input
        name="solInput"
        id="solInput"
        className="form-input"
        type="text"
        size="4"
        placeholder={this.props.max_sol}
        value={this.state.solInput}
        onChange={this.handleSolChange}
      />
      <button className="form-input" type="button" onClick={this.handleSubmit}>Find Photos!</button>
    </form>
    )
  }
}