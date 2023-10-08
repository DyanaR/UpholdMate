import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import house from "../assets/house.png";
import car from "../assets/car.png";
import life from "../assets/life.png";

const Homepage = () => {
  const navigate = useNavigate();
  const [hoverHouse, setHoverHouse] = useState(true);
  const [hoverCar, setHoverCar] = useState(false);
  const [hoverLife, setHoverLife] = useState(false);

  return (
    <Container>
      <div>
        <div className="App">
          <div
            className="house"
            style={{backgroundColor: hoverHouse ? "#79c3e6" : "transparent"}}
            onClick={() => {
              navigate("home");
            }}
            onMouseEnter={() => setHoverHouse(true)}
            onMouseLeave={() => setHoverHouse(false)}
          >
            <h1>HOME</h1>
          </div>
          <div
            className="car"
            onClick={() => {
              navigate("car");
            }}
            onMouseEnter={() => {setHoverCar(true); setHoverHouse(false)}}
            onMouseLeave={() => {setHoverCar(false); setHoverHouse(true)}}
          >
            <h1>VEHICLE</h1>
          </div>
          <div
            className="life"
            onClick={() => {
              navigate("life");
            }}
            onMouseEnter={() => {setHoverLife(true); setHoverHouse(false)}}
            onMouseLeave={() => {setHoverLife(false); setHoverHouse(true)}}
          >
            <h1>LIFE</h1>
          </div>
        </div>
        {hoverHouse && (
          <div className="house-spline">
            <img
              className="img-house"
              src={house}
              alt="house"
              style={{ height: "300px" }}
              
            />
          </div>
        )}
        {hoverCar && (
          <div className="car-spline">
            <img
              className="img-car"
              src={car}
              alt="car"
              style={{ height: "300px" }}
            />
          </div>
        )}
        {hoverLife && (
          <div className="life-spline">
            <img
              className="img-life"
              src={life}
              alt="life"
              style={{ height: "400px" }}
            />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Homepage;

const Container = styled.div`
  .App {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 100vh;
    text-align: left;
  }
  .house {
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
    top: 22rem;
    left: 50%;
    transform: translate(-50%, 0);
    pointer-events:none;
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
    top: 20rem;
    left: 55%;
    transform: translate(-55%, 0);
    pointer-events:none;
  }
  .life {
    border: 1px solid lightgrey;
    padding-top: 1rem;
    padding-left: 1rem;
  }
  .life:hover {
    background-color: #72C190;
    text-decoration: underline;
  }
  .life-spline {
    position: fixed;
    top: 15rem;
    left: 55%;
    transform: translate(-55%, 0);
  }
  @media screen and (min-width: 900px) {
    .img-house {
      height: 600px !important;
    }
    .house-spline {
      top: 8rem;
    }
    .img-car {
      height: 600px !important;
    }
    .car-spline{
      top: 8rem;
    }
    .img-life{
      height: 500px !important;
    }
    .life-spline{
      top: 11rem;
    }
  }
`;
