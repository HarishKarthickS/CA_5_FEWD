import {React,useState } from "react";
import { Link } from "react-router-dom";
import './Home.css'
import Logo from '../assets/Logo.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { images } from "../data/CarouselData";


const Home =()=>{
  let [currIndex,setCurrIndex] = useState(0);
    console.log("img",images)

    function moveBackward(){
        if(currIndex === 0){
            setCurrIndex(images.length-1);
        }
        else{
            setCurrIndex(currIndex-1);
        }
    }

    function moveForward(){
        if(currIndex === images.length-1){
            setCurrIndex(0);
        }
        else{
            setCurrIndex(currIndex+1);
        }
    }

    const myStyle ={
        backgroundImage:`url(${images[currIndex].img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize:"100% 100%",
        height: "80vh",
        width: "100vw",
    }
  return (
    <>
    {/*Declaring navbar of the website which contains title, logo, searchbar and register button*/}
      <div id="Navbar">

        {/* This div contains the logo and title of the website */}
        <div id="logo-div">
          <Link to="/"><img src={Logo} alt="" id="Logo"/></Link>
          <h2>Kalvium Books</h2>
        </div>

        {/* this div contains the search bar */}
        <div id="Search-container">
          {/* <input type="text" 
            placeholder="🔍 Find yout dream book..."
            onChange={(e)=>{setSearch(e.target.value),setShow(true)}}/>   */}
        </div>

        {/* this div contains the register button */}
        <div id="Navbar-1">
          <Link to="/form"><button id="Register">Register</button></Link>
        </div>
      </div> 

      {/*Declaring body for the website which contains Books*/}
      <div id="Body">
      <div className="main-container" style={myStyle}>
            <div className="arrowLeft">
                <ArrowBackIosIcon onClick={moveBackward}/>
            </div>
            <div className="arrowRight">
                <ArrowForwardIosIcon onClick={moveForward}/>
            </div> 
        </div>
        <div id="register">
          <h1 id="h1">Please Register to unlock your knowledge</h1>
          <Link to="/form"><button id="button-reg">Register</button></Link>
        </div>
    </div>
    <footer>
      ©️2024 Copyright Kalvium Books  
    </footer>
        </>
    )
}

export default Home;