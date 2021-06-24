import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './styles/App.css';
import './styles/reset.css';
import './styles/fonts.css';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
