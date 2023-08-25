import React from "react";
import Navbar from "../navbar/Navbar";


const Home = () => {
  return (
    <>
      <Navbar />
      <button style={{marginTop:"5px",marginLeft:"93%"}} className="btn btn-warning">Log Out</button>
      <div className="resume-section-content" style={{textAlign:"center",marginTop:"80px"}}>
      <h2 className="mb-0" style={{color:"blue"}}>
        Welcome <span className="text-success" style={{paddingLeft:'30px'}}>to <span style={{color:"blueviolet"}}>our</span> Website</span>
        </h2>
      </div>
      <img style={{height:"370px",width:"850px",marginLeft:"20%"}} src="/public/welcome.jpg" alt="" />
    </>
  );
};

export default Home;
