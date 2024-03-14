import './App.css';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import BlogPage from './components/BlogPage/BlogPage';
import BlogDetails from './components/Blog/BlogDetails';
import Load from './components/Loading/Load';
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch
} from "react-router-dom";

import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import Programs from './components/Programs/Programs';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      {loading ? (
        <Load /> 
      ) : (
        <div className='Container'>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage setLoading={setLoading}/>} />
            <Route path='/blog' element={<BlogPage setLoading={setLoading}/>} />
            <Route path='/blog/:id' element={<BlogDetails setLoading={setLoading}/>} />
            <Route path='/about' element={<AboutPage setLoading={setLoading}/>} />
            <Route path='/programs' element={<Programs setLoading={setLoading}/>} />
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
    
  );
}

export default App;
