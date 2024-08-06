
import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
// import Row from 'react-bootstrap/Row';
import arrow from '../images/next.png'
// import CourseItem from './CourseItem';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Course(props) {
  const navigate = useNavigate()
const gotToNewPage=()=>{
  navigate("/CourseItem");
}
  return (
    <>
   
     {/* <div className='flex box-content hover:space-x-8 px-[10px] py-[30px] border-solid border-2 border-red-100  rounded-lg mt-4 mx-3 shadow-xl '> */}
    <div onClick={() => gotToNewPage()} id='mainn' className='box-border hover:shadow-2xl hover:bg-emerald-500 px-[10px] py-[10px] h-47 w-48
     my-4 mx-4 p-10 border-4 flex rounded-lg shadow-xl space-x-6'>
      
      <h3 className='hover:text-emerald-100 ' >{props.name}</h3>
      
    
      <img src={arrow} style={{width:'40px'}}/>
    </div>
    
    </>
  );

}







export default Course;
