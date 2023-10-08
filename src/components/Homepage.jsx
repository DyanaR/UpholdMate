import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import house from "../assets/house.png";
import car from "../assets/car.png";
import life from "../assets/life.png";


const Homepage = () => {
    const navigate = useNavigate();
    const [hoverHouse, setHoverHouse] = useState(false);
    const [hoverCar, setHoverCar] = useState(false);
    const [hoverLife, setHoverLife] = useState(false);

    // const [active, setActive] = useState(false);

 
  return (
    <Container>
    {/* <Navbar/> */}
    {/* { active ? */}

     
        

    <div>
    
    <div className="App">
   
      <div
        className="house"
        onClick={()=> {navigate('home')}}
        onMouseEnter={() => setHoverHouse(true)}
        onMouseLeave={() => setHoverHouse(false)}>
        <h1>HOME</h1>
      </div>
      <div className="car"
      onClick={()=> {navigate('car')}}
        onMouseEnter={() => setHoverCar(true)}
        onMouseLeave={() => setHoverCar(false)}>
        <h1>VEHICLE</h1>
      </div>
      <div className="life"
      onClick={()=> {navigate('life')}}
        onMouseEnter={() => setHoverLife(true)}
        onMouseLeave={() => setHoverLife(false)}>
        <h1>LIFE</h1>
      </div>
    </div>
    {hoverHouse && (
      <div className="house-spline">
        
        <img src={house} alt="logo" style={{ height: "300px" }} />
      </div>
    )}
    {hoverCar && (
      <div className="car-spline">

        <img src={car} alt="logo" style={{ height: "300px" }} />
      </div>
    )}
    {hoverLife && (
      <div className="life-spline">

        <img src={life} alt="logo" style={{ height: "400px" }} />
      </div>
    )}
    </div>
    

   
  </Container>
  )
}

export default Homepage

const Container = styled.div`
  .App {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 100vh;
    ${"" /* padding: 1rem; */}
    text-align: left;
    ${"" /* background-color: red; */}
  }
  .house {
    ${"" /* z-index: 3; */}
    border: 1px solid lightgrey;
    padding-left: 1rem;
    padding-top: 1rem;
  }
  .house:hover {
    background-color: #79c3e6;
    text-decoration: underline;
  }
  .house-spline {
    position: fixed;
    ${"" /* z-index: 1; */}
    top: 22rem;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .car {
    border: 1px solid lightgrey;
    padding-top: 1rem;
    padding-left: 1rem;
  }
  .car:hover {
    background-color: #e3b0b7;
    text-decoration: underline;
  }
  .car-spline {
    position: fixed;
    ${"" /* z-index: 1; */}
    top: 20rem;
    left: 55%;
    transform: translate(-55%, 0);
  }
  .life {
    border: 1px solid lightgrey;
    padding-top: 1rem;
    padding-left: 1rem;
  }
  .life:hover {
    background-color: #695577;
    text-decoration: underline;
  }
  .life-spline {
    position: fixed;
    ${"" /* z-index: 1; */}
    top: 15rem;
    left: 55%;
    transform: translate(-55%, 0);
  }
`;
