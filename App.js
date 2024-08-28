import React from 'react';
import './App.css'; // سنستخدم هذا الملف لتنسيق الواجهة

function App() {
  return (
    <div className="main-container">
    <header className="header">
      <div className="logo">
        <img src="/icoon.png" alt="Logo Icon" className="logo-icon" /> {}
        PalFlex Education
      </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#"> Become a Teacher </a></li>
            <li><a href="#"> Find Teachers </a></li>
          </ul>
        </nav>
        <div className="login-section">
          <button>Login </button>
        </div>
      </header>
      
      <main className="content">
        <div className="text-section">
          <h1> Start your educational journey with us </h1>
          <button className="cta-button"> Start</button>
        </div>
        <div className="image-section">
          {/* <img src="your-image-url-here" alt="مدرس" /> */}
          <img src="/students.png" alt="Logo Icon" className="logo-icon" /> {}
        </div>
      </main>
    </div>
  );
}

export default App;
