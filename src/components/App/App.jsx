import React from 'react';
import axios from 'axios';
import './App.css';

// Router
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Components
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';

function App() {

  return (
    <div className='App'>
      <Header />
      <Router>
        <form onSubmit={(event) => submitFeedback(event)}>
          <Route path='/' exact>
            <Feeling />
          </Route>

          <Route path='/understanding' exaxct>
            <Understanding />
          </Route>
        </form>
      </Router>
    </div>
  );
}

export default App;
