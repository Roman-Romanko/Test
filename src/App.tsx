import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RoutesComponent } from './router/Routers';
import { NavBar } from './components/NavBar';

const App = () => {
  return (
    <Router>
      <NavBar />
      <RoutesComponent />
    </Router>
  );
};

export default App;