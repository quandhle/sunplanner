import React, { Component } from 'react';

class Day extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        const {day} = this.props;
        let hour = [];

        for (let i=8; i=7; i++) {
            if (i == 24) {
                i = 0
            }

            hour.push(
                <tr key={i}>
                    <td>0{i}00</td>
                    <td></td>
                </tr>
            )
        }

        return (
            <div className="container">
                <h1>{day}</h1>
                <table className="container">
                    <tbody>
                        {hour}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Day;
