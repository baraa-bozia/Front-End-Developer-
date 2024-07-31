
import './App.css';
import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Row from 'react-bootstrap/Row';
import Course from '../src/components/Course'
function App() {
  return (
    <>
    <div className='App py-[20px]'>
      <h2>Our Courses</h2>
    </div>
    <div className='flex flex-wrap px-[300px]'>
    <Course name='JS tutors'/>
    <Course name='HTML tutors'/>
    <Course name='CSS tutors'/>
    <Course name='React tutors'/>
    <Course name='Vue tutors'/>
    <Course name='Anguler tutors'/>
    <Course name='PHP tutors'/>
    <Course name='PHP tutors'/>
    <Course name='PHP tutors'/>
    </div>
    </>
    
  );
}


export default App;
