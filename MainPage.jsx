
import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
// import Row from 'react-bootstrap/Row';
import Course from './Course';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
function mainpage(){
    return(
        <>
    <div className='App py-[20px]'>
    <h2>Our Courses</h2>
  </div>
  
  <div className='flex flex-wrap px-[300px]'>
  <Course name='JS tutors' title='JS'/>
  <Course name='HTML tutors'/>
  <Course name='CSS tutors'/>
  <Course name='React tutors'/>
  <Course name='Vue tutors'/>
  <Course name='Anguler tutors'/>
  <Course name='PHP tutors'/>
  <Course name='Flutter tutors'/>
  <Course name='Java tutors'/>
  </div>
  </>
    )
}
export default mainpage;