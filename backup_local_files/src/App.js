// Arquivo principal do app
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import MoviesList from './views/MoviesList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/movies" element={<MoviesList />} />
      </Routes>
    </Router>
  );
}

export default App;
