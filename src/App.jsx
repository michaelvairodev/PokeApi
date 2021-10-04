import React from 'react';
import Content from './components/Content';
import Footer from './shared/Footer';
import Header from './shared/Header';
import DetailsPokemon from './components/DetailsPokemon';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/detalles'>
            <DetailsPokemon />
          </Route>
          <Route exact path='/'>
            <Content />
          </Route>
          <Footer />
        </Switch>
      </Router>
    </div>
  );
}
