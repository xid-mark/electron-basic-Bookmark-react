import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
    render() {
        return (
            <button className={this.props.active ? 'btn btn-default active' : 'btn btn-default'} onClick={this.changeType.bind(this)}>
                <span className={`icon ${this.props.icon}`}></span>
            </button>
        );
    }

    changeType(e) {
        if (!this.props.active) {
            this.props.changeType(this.props.type);
        }
    }
}