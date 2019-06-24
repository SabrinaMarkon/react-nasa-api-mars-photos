import React, { Component } from 'react';

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      solInput: this.props.max_sol,
      cameraInput: ''
    }
    this.handleSolChange = this.handleSolChange.bind(this);
    this.handleCameraSelected = this.handleCameraSelected.bind(this);
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

  handleCameraSelected = event => {
    let cameraInput = event.target.value;
    this.setState({
      cameraInput
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.doSearch(this.state.cameraInput, this.state.solInput);
  }

  render() {
    return (
    <form className="center-align pt-2">
      <label htmlFor="cameraInput" className="searchlabel">Camera:</label>
      <select 
        name="cameraInput"
        className="form-input" 
        value={this.state.cameraInput} 
        onChange={this.handleCameraSelected}>
        <option value="">Any and All!</option>
        <option value="fhaz">Front Hazard Avoidance Camera (FHAZ)</option>
        <option value="rhaz">Rear Hazard Avoidance Camera (RHAZ)</option>
        <option value="mast">Mast Camera (MAST)</option>
        <option value="chemcam">Chemistry and Camera Complex (CHEMCAM)</option>
        <option value="mahli">Mars Hand Lens Imager (MAHLI)</option>
        <option value="mardi">Mars Descent Imager (MARDI)</option>
        <option value="navcam">Navigation Camera (NAVCAM)</option>
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