import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Contacts from './components/Contacts/Contacts';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Contacts' component={Contacts} />
    </Switch>
)