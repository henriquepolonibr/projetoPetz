import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Lista from './pages/Lista';
import Posts from './pages/Posts';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Lista} />
                <Route exact path="/posts/:id" component={Posts}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;