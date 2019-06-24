import React, { Component } from 'react';

export default class Result extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shineclass: ''
    }
    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleHover() {
    this.setState({
      shineclass: 'shine'
    });
  }

  handleLeave() {
    setTimeout(() => {
      this.setState({
        shineclass: ''
      });
    }, 2000);
  }

  handleOpenModal(row) {
    const modalid = `modal-${row['id']}`;
    const imageid = `image-${row['id']}`;
    const modalimageid = `modalimage-${row['id']}`;
    const modal = document.getElementById(modalid);
    const img = document.getElementById(imageid);
    const modalImg = document.getElementById(modalimageid);
    modal.style.display = "block";
    modalImg.src = row['img_src'];
  }

  handleCloseModal(row) {
    const modalid = `modal-${row['id']}`;
    const modal = document.getElementById(modalid);
    modal.style.display = "none";
  }

  render() {
    const row = this.props.row;
    return (
      <div className="grid-item-wrapper" onMouseOver={this.handleHover} onMouseLeave={this.handleLeave}>
        <figure className="grid-item">
          <img id={`image-${row['id']}`} src={row['img_src']} className="photo" alt={row['img_src']} onClick={() => {this.handleOpenModal(row)}} />
          {this.state.shineclass === 'shine'
            && <div className='shine'></div>
          }
          <figcaption className="description">
            <div>Martian Sol: <span className="fieldvalue">{row['sol']}</span></div>
            <div>Earth Date: <span className="fieldvalue">{row['earth_date']}</span></div>
            <div>Camera: <span className="fieldvalue">{row['camera'].name}</span></div>
          </figcaption>
        </figure>
        <div id={`modal-${row['id']}`} className="modal" onClick={() => {this.handleCloseModal(row)}}>
        <span className="close" onClick={() => {this.handleCloseModal(row)}}>&times;</span>
        <img id={`modalimage-${row['id']}`} className="modal-content" />
        </div>
    </div>
    );
  }
}