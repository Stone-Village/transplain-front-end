
import React from 'react';
import './App.css'
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home'



function App() {

return (
  <Router>
    <Header />
    <Routes>
      <Route
      exact path='/'
      element={<Home />}></Route>
    </Routes>
    <Footer />
  </Router>
)

}

export default App
