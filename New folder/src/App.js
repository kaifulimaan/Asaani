import React from 'react';
import Navbar from './navbar'; 
import './App.css'; 
import Footer from './footer'; 


function App() {
  return (
    <><><><div className="app">
      <Navbar />
      <Footer />
    </div><div className="centered-text">
        <h1>ہر مشکل کام اب ہوگا آسان</h1>
      </div></><div className="centered-text2">
        <h1>آسانی</h1>
      </div></><div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Signup</button>
      </div></>
    
    
  
  );
}

export default App;
