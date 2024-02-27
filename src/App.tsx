import React from 'react';
import './App.css';
import Addtodo from './components/addtodo';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div >
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Addtodo />} />
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
