
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
  return (
    // <>
    // <div className='App py-[20px]'>
    //   <h2>Our Courses</h2>
    // </div>
    // <div className='flex flex-wrap px-[300px]'>
    // <Course name='JS tutors'/>
    // <Course name='HTML tutors'/>
    // <Course name='CSS tutors'/>
    // <Course name='React tutors'/>
    // <Course name='Vue tutors'/>
    // <Course name='Anguler tutors'/>
    // <Course name='PHP tutors'/>
    // <Course name='PHP tutors'/>
    // <Course name='PHP tutors'/>
    // </div>
    // </>
    <>
    
        
    

    <BrowserRouter>
    <div  className='App py-[20px]'>
       <h2 >Our Courses</h2>
     </div>
    <div className='flex flex-wrap px-[300px]'>
      {/* <h1 style={{color:"red"}}>{componentsArr[0].name}</h1> */}
      
        <Routes >
          
            <Route 
                // exact
                path="/"
                
                element={<Course name="JS tutors"/>}

            />
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
                exact
                path="/CourseItem"
                element={<CourseItem name='JS tutors'/>}
            />
            
        </Routes>
        <Routes >
            <Route
                // exact
                path="/"
                
                element={<Course name="HTML tutors"/>}

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
            

        </div>
    </BrowserRouter>
</>
  );
}


export default App;