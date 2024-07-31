
import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Row from 'react-bootstrap/Row';
import arrow from '../images/next.png'
function Course(props) {
  return (
    <>
     {/* <div className='flex box-content hover:space-x-8 px-[10px] py-[30px] border-solid border-2 border-red-100  rounded-lg mt-4 mx-3 shadow-xl '> */}
    <div className='box-border hover:space-x-11 px-[10px] py-[30px] h-47 w-48 my-3 mx-3 p-10 border-4 flex rounded-lg shadow-xl space-x-6'>
      <h2>{props.name}</h2>
    
    
      <img src={arrow} style={{width:'40px'}}/>
    </div> 
    </>
  );
}


export default Course;
