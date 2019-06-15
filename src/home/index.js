import React, { Component, Fragment } from 'react';
import Day from '../day';
import ToDo from '../todo';
import './home.scss';

class Focus extends Component {
    render () {
        return (
            <Fragment>
                <div className="container bg-primary">
                    <h1>This Week's Focus</h1>
                    <div className="focusInput">
                        Enter an input...
                    </div>
                </div>
                <div className="container bg-success">
                    <h1>Good Things That Happened...</h1>
                    <div className="good">
                        <p>List good things...</p>
                    </div>
                </div>
                <div className="daily container col">
                    <Day day="Sunday"/>
                    <Day day="Monday"/>
                    <Day day="Tuesday"/>
                    <Day day="Wednesday"/>
                    <Day day="Thursday"/>
                    <Day day="Friday"/>
                    <Day day="Saturday"/>
                </div>
                <ToDo title="Personal"/>
                <ToDo title="Work"/>
            </Fragment>
        )
    }
}

export default Focus;
