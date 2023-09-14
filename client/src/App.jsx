import styles from './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage/HomePage'
import LandingPage from './components/LandingPage/LandingPage';
import Details from './components/Details/Details';

const App = () => {

  return(
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/details" element={<Details />} />
      </Routes>
  );
}

export default App;