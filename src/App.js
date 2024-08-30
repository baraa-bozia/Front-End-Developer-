
import './App.css';
import React from 'react'; 
// import 'bootstrap/dist/css/bootstrap.css'; 
// import Row from 'react-bootstrap/Row';
import Course from '../src/components/Course'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CourseItem from './components/CourseItem';
import SignUp from './components/SignUp';
import SignUpStu from './components/SignUpStu';
import SignUpTeach from './components/SignUpTeach';
import Footer from './components/Footer';
import LogIn from './components/LogIn';
import MainNav from './components/MainNav';
import { useState } from 'react';
import CourseTit from './components/CourseTit';
import Mainhead from './components/Mainhead';
// let componentsArr = [{
//   name:"JS tutors",
//   id:1
// }
// ,
// {
// name:"HTML tutors",
//   id:2
// }
// ]

function App() {
    const [showNav,setShowNav]=useState(true);
    const [showCourse,setShowCourse]=useState(true);

  return (

    <>
    
        
    
    
     {showNav && <MainNav/>}
     <Mainhead/>

     {showCourse && <CourseTit/>}

     {/* <div  className='App py-[20px]' setShowCourse={setShowCourse}>
       <h2 >Our Courses</h2>
     </div> */}
    <BrowserRouter>
    
    <div className='flex flex-wrap px-[300px]'>
      {/* <h1 style={{color:"red"}}>{componentsArr[0].name}</h1> */}
      
        
            
            <Routes>
             <Route 
                // exact
                path="/SignUp"
                
                element={<SignUp/>}

            />
              <Route 
                // exact
                path="/studentSignUp"
                
                element={<SignUpStu/>}

            />
                <Route 
                // exact
                path="/teacherSignUp"
                
                element={<SignUpTeach/>}

            />
                    <Route 
                // exact
                path="/login"
                
                element={<LogIn/>}

            />
           
            <Route
                exact
                path="/CourseItem"
                element={<CourseItem  setShowNav={setShowNav} setShowCourse={setShowCourse}/>}
            />
            
        </Routes>
        <Routes >
            <Route
                // exact
                path="/"
                
                element={<Course name="HTML tutors"  />}

            />
            </Routes>
            <Routes >
            <Route
                // exact
                path="/"
                element={<Course name='CSS tutors'/>}

            />
            </Routes>
            <Routes >
            <Route
                // exact
                path="/"
                element={<Course name='React tutors'/>}

            />
            </Routes>
            <Routes >
            <Route
                // exact
                path="/"
                element={<Course name='Vue tutors'/>}

            />
            </Routes>
            <Routes >
            <Route
                // exact
                path="/"
                element={<Course name='Anguler tutors'/>}

            />
            </Routes>
            <Routes>
           <Route 
                // exact
                path="/"
                
                element={<Course name="JS tutors" setShowNav={setShowNav}/>}

            />
            </Routes>

        </div>
    </BrowserRouter>
    <Footer/>


</>


  );
  
}


export default App;
