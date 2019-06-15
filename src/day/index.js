import React, { Component } from 'react';

class Day extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        const {day} = this.props;

        return (
            <div className="container">
                <h1>{day}</h1>
            </div>
        )
    }
}

export default Day;
