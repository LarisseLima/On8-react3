import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home'
import Movies from '../Pages/Movies'
import Bio from '../Pages/Bio'


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/bio" component={Bio} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes