import React, { Component } from 'react';

class ToDo extends Component {
    render () {
        return (
            <div className="personal container">
                <h1>{this.props.title} To-Do List</h1>
                <p>This is a todo list...</p>
            </div>
        )
    }
}

export default ToDo;
