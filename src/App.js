import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import UrlDecode from './components/UrlDecode/UrlDecode';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/urlDecode" component={UrlDecode} />
      </Router>
    </div>
  );
}

export default App;
