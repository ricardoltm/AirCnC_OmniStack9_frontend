import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* exact impede que todas as rotas chamadas sejam direcionadas para login, pois a / contém em todos as rotas. */}
        <Route path="/" exact component={Login} /> 
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/new" component={New} />
      </Switch>
    </BrowserRouter>
  );
}