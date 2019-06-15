import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Focus from './home';
import './App.css';

const App = () => {
    return (
        <div className="app center">
            <Switch>
                <Route exact path='/' component={Focus}/>
            </Switch>
        </div>
    );
}

export default App;
