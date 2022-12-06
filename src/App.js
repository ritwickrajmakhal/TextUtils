import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [theme, setTheme] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (alert, type) => {
    setAlert({
      msg: alert,
      type: type
    });
  }
  setTimeout(() => {
    setAlert(null);
  }, 1500);
  const changeTheme = (color) => {
    setTheme(color);
    if (color === 'danger') {
      document.body.style.backgroundColor = 'rgb(123 47 78)';
    }
    else if (color === 'dark') {
      document.body.style.backgroundColor = 'rgb(77 76 79)';
    }
    else if (color === 'primary') {
      document.body.style.backgroundColor = 'rgb(25 39 83)';
    }
    else {
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" changeTheme={changeTheme} theme={theme} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} theme={theme} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
