import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Result extends Component {
    constructor (props) {
        super(props);
        this.state = {
            shineclass: '',
            zoomclass: 'modal-content-out'
        };
        this.handleHover = this.handleHover.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
        this.handleToggleModal = this.handleToggleModal.bind(this);
    }

    /* Clear the setTimeout subscription for handleLeave() (shine on cards) so we don't get this:
  Warning: Can’t call setState (or forceUpdate) on an unmounted component.
  This is a no-op, but it indicates a memory leak in your application.
  To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method. */
    componentWillUnmount () {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    handleHover () {
        this.setState({
            shineclass: 'shine'
        });
    }

    handleLeave () {
        this.timeout = setTimeout(() => {
            this.setState({
                shineclass: ''
            });
        }, 2000);
    }

    handleToggleModal (row) {
        const modalid = `modal-${row['id']}`;
        const modal = document.getElementById(modalid);
        let zoom = 'modal-content-out'; // default is hidden (zoomed out)
        if (this.state.zoomclass === zoom) {
            zoom = 'modal-content'; // its hidden so let's show it.
            modal.style.display = 'block';
        } else {
            zoom = 'modal-content-out'; // it is showing so let's hide it.
        }
        this.setState({
            zoomclass: zoom
        });
    }

    render () {
        const row = this.props.row;
        let imgSrc = row['img_src'].replace('http', 'https');
        return (
            <div className="grid-item-wrapper" onMouseOver={this.handleHover} onMouseLeave={this.handleLeave}>
                <figure className="grid-item">
                    <img id={`image-${row['id']}`} src={imgSrc} className="photo"
                        alt={row['img_src']} onClick={() => {this.handleToggleModal(row);}} />
                    {this.state.shineclass === 'shine' &&
            <div className="shine" />
                    }
                    <figcaption className="description">
                        <div>Martian Sol: <span className="fieldvalue">{row['sol']}</span></div>
                        <div>Earth Date: <span className="fieldvalue">{row['earth_date']}</span></div>
                        <div>Camera: <span className="fieldvalue">{row['camera'].name}</span></div>
                    </figcaption>
                </figure>
                <div id={`modal-${row['id']}`} className={'modal ' + this.state.zoomclass}
                    onClick={() => {this.handleToggleModal(row);}} style={{ display: 'none' }}>
                    <span className="close" onClick={() => {this.handleToggleModal(row);}}>&times;</span>
                    <div className="modal-frame center-align">
                        <img id={`modalimage-${row['id']}`} className="modal-image" src={row['img_src']} />
                    </div>
                </div>
            </div>
        );
    }
}

Result.propTypes = {
    row: PropTypes.object
};
