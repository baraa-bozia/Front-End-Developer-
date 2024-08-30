import React from 'react';
import '../footer/Mainnav.css'; // سنستخدم هذا الملف لتنسيق الواجهة
import { useNavigate } from "react-router-dom";
function MainNav() {
  // const navigate = useNavigate();

  // const gotToStudent=()=>{
  //   navigate("/studentSignUp");
  // }
  // const gotToTeacher=()=>{
  //   navigate("/teacherSignUp");
  // }
  // const gotToLogin=()=>{
  //   navigate("/login");
  // }
  return (
    <div className="main-container">
    <header className="header">
      <div className="logo">
        <img src="../images/icoon.png" alt="Logo Icon" className="logo-icon" /> {}
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
      
     
    </div>
  );
}

export default MainNav;
