import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

// import SignUpStudent from './signUpStudent'
// import signUpTeacher from './signUpTeacher'
export default function SignUp() {
  const navigate = useNavigate();

  const gotToStudent=()=>{
    navigate("/studentSignUp");
  }
  const gotToTeacher=()=>{
    navigate("/teacherSignUp");
  }
  return (
    <div className='flex flex-col  my-2 mx-4 p-10 ml-[25%] md:text-center text-justify place-content-center'>
      <h1 className='my-4 text-xl'>Sign Up</h1>
      {/* <a href='#'>Sign Up As A Teacher</a> */}
     <button onClick={() => gotToTeacher()} className=" my-8 hover:text-emerald-100 hover:bg-emerald-500 text-green-700 font-semibold py-2 px-20 border my-3 border-black hover:border-transparent rounded"><Link to={'#'}>Sign Up As A Teacher</Link></button> 
     <button onClick={() => gotToStudent()} className=" my-8 hover:text-emerald-100 hover:bg-emerald-500 text-green-700 font-semibold py-2 px-4 border my-1 border-black hover:border-transparent rounded">Sign Up As A Student</button> 
      <h1 className='my-2'>Already Have an Account?</h1>
     <button className=" my-8 hover:text-emerald-100 hover:bg-emerald-500 text-green-700 font-semibold py-2 px-4 border my-1 border-black hover:border-transparent rounded"><Link to={"#"}>Log In</Link></button> 

      


    </div>
  )
}
