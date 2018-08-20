import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route }  from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
        </Switch>
    </BrowserRouter>, 
    document.getElementById('root'));