
// import React from 'react'; 
// import 'bootstrap/dist/css/bootstrap.css'; 
// import Row from 'react-bootstrap/Row';
// import arrow from '../images/next.png'
// function CourseItem(props) {
//   return (
//     <>
//      {/* <div className='flex box-content hover:space-x-8 px-[10px] py-[30px] border-solid border-2 border-red-100  rounded-lg mt-4 mx-3 shadow-xl '> */}
//     {/* <div className='box-border hover:space-x-11 hover:shadow-2xl hover:bg-emerald-500 px-[10px] py-[10px] h-47 w-48 my-4 mx-4 p-10 border-4 flex rounded-lg shadow-xl space-x-6'>
//       <h3 className='hover:text-emerald-100 '>{props.name}</h3>
      
    
//       <img src={arrow} style={{width:'40px'}}/>
//     </div>  */}
 
//     {/* <div>{props.desc}</div> */}
//     <div>hiiiiiii</div>
//     </>
//   );
// }


// export default CourseItem;


// const CourseItem = () => {
//   return <h1>Blog Articles</h1>;
// };

// export default CourseItem;import React from 'react';
import { useNavigate } from "react-router-dom";
import tutor from '../images/tutor.jpg'
import { useLayoutEffect } from "react";
const CourseItem = ({setShowNav,setShowCourse}) => {
  const navigate = useNavigate()
  const gotToNewPage=()=>{
    navigate("/Course");
  }
  const gotToSignUp=()=>{
    navigate("/SignUp");
    setShowNav(true);

  }
  function GFG_Fun() {
    navigate(-1);
    setShowNav(true);
    setShowCourse(true);
}
  useLayoutEffect(()=>{
    setShowNav(false);
    setShowCourse(false);
  },[])
  
  return (
    <div className=" bg-emerald-100   h-full flex flex-wrap  my-4 mx-4 p-10 text-center items-center justify-center">
   <button className=" my-8  hover:text-emerald-500" onClick={() => GFG_Fun()}>
                Go Back 
            </button>
    <div className="my-8 mx-20">
      <h3  className="text-green-950">Find the right tutor for you</h3>
      <button onClick={() => gotToSignUp()} className=" my-8 hover:text-emerald-100 hover:bg-emerald-500 text-green-700 font-semibold py-2 px-4 border border-black hover:border-transparent rounded">Get Started</button>
     
      </div>
      {/* <div className="flex flex-wrap"> */}
      <div className="my-50 mx-50">
      <img  src={tutor}></img>
      </div>
      
      
            {/* </div> */}
    </div>
  );
};
export default CourseItem;
