import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import About from './pages/About'; 
import Cart from './pages/Cart';
import Store from './pages/Store'

export default function MisRoutes(){ 
    return( 
        <Switch> 
            <Route exact path='/' component={Store}/> 
            <Route path='/cart' component={Cart}/>
            <Route path='/about' component={About}/>
        </Switch>
    );
}