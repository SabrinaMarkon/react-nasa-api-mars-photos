import React, { Component } from 'react';

export default class Result extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shineclass: ''
    }
    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  handleHover() {
    this.setState({
      shineclass: 'shine'
    });
    // console.log(event.target.id + ' - ' + this.state.shineclass);
  }

  handleLeave() {
    setTimeout(() => {
      this.setState({
        shineclass: ''
      });
    }, 2000);
  }

  render() {
    const row = this.props.row;
    return (
      <div className="grid-item-wrapper" onMouseOver={this.handleHover} onMouseLeave={this.handleLeave}>
      <figure className="grid-item">
        <img src={row['img_src']} className="photo" alt={row['img_src']} />
        {this.state.shineclass === 'shine'
          && <div className='shine'></div>
        }
        <figcaption className="description">
          <div>Martian Sol: <span className="fieldvalue">{row['sol']}</span></div>
          <div>Earth Date: <span className="fieldvalue">{row['earth_date']}</span></div>
          <div>Camera: <span className="fieldvalue">{row['camera'].name}</span></div>
        </figcaption>
      </figure>
    </div>
    );
  }
}