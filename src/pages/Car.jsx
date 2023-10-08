import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import car from "../assets/car.png";
import { BsMouse } from "react-icons/bs";
import { AiOutlineCar } from "react-icons/ai";
import ScrollUp from "../components/ScrollUp";
import {
  GiCartwheel,
  GiSteeringWheel,
  GiBeltArmor,
  GiVileFluid,
} from "react-icons/gi";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <div className="arrow">
          <AiOutlineArrowLeft
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="house-image">
          <img
            className="img-car"
            src={car}
            alt="car"
            style={{ height: "300px" }}
          />
          <div className="mouse" style={{ fontSize: "2rem" }}>
            <BsMouse />
            <h6>SCROLL DOWN</h6>
          </div>
        </div>
        <div></div>
        <div className="home-info">
          <div className="title">
            <h1>CAR MAINTENANCE</h1>
          </div>
          <div className="intro">
            <p>
              Owning a house is a huge responsibility, and there are many little
              things you have to keep track of. Since there are many things that
              need to be maintained in a house - we have listed five interesting
              and important ones. They include Overhanging branches, Flushing
              the Water Heater, Clean Gutters, Driveway Sealing, and Dryer Vent
              Cleaning.{" "}
            </p>
          </div>
          <div className="boxes">
            <a href="#wheel">
              <div className="box">
                <GiCartwheel />
                Wheel Alignment
              </div>
            </a>
            <a href="#brake">
              <div className="box">
                <AiOutlineCar />
                Brakes and Rotors
              </div>
            </a>
            <a href="#power">
              <div className="box">
                <GiSteeringWheel />
                Power Steering
              </div>
            </a>
            <a href="#belt">
              <div className="box">
                <GiBeltArmor />
                Timing Belt
              </div>
            </a>
            <a href="#fluid">
              <div className="box">
                <GiVileFluid />
                Transmission Fluid
              </div>
            </a>
          </div>
          <div className="list">
            <ul>
              <div className="info">
                <li id="wheel">Wheel Alignment</li>
                <p>
                  <strong>How often should it done:</strong> Every 2-3 years.
                </p>
                <p>
                  <strong>What is it: </strong>basically making sure the
                  steering wheel and the tires both point straight.
                </p>
                <p>
                  <strong>Why it happens:</strong> because of potholes, bumps,
                  ect.
                </p>
                <p>
                  <strong>What happens if left unaddressed:</strong> It will
                  cause Uneven wear on tires, and lesser performance out of the
                  car.
                </p>
              </div>
              <div className="info">
                <li id="brake">Brakes and Rotors</li>
                <p>
                  <strong>How often should it done:</strong> 10k to 20k miles
                  for breaks, and 50k-70k miles for Rotors.
                </p>
                <p>
                  <strong>What is it:</strong> It is well known that brakes are
                  used to stop and slow a car, but it has a specific way of
                  doing that. Brake Pads are a mix of graphite, steel, iron and
                  copper formed into a solid block that are pressed against the
                  rotors to slow down the car.
                </p>
                <p>
                  <strong>Why it happens:</strong> It will damage the entire
                  brake system, causing damage to the car.
                </p>
                <p>
                  <strong>What happens if left unaddressed:</strong> The water
                  heater won’t last as long. Flushing it yearly saves you money
                  in the long run.
                </p>
              </div>
              <div className="info">
                <li id="power">Power Steering</li>
                <p>
                  <strong>How often should it done:</strong> Every 2 years or
                  every 75k miles.
                </p>
                <p>
                  <strong>What is it:</strong> A system that has hydraulic links
                  between the front and back wheel that make it easier to turn.
                </p>
                <p>
                  <strong>Why it happens:</strong> naturally over time, since
                  the fluid burns and evaporates.
                </p>
                <p>
                  <strong>What happens if left unaddressed:</strong> It will
                  make the car hard to drive.
                </p>
              </div>

              <div className="info">
                <li id="belt">Timing Belt</li>
                <p>
                  <strong>How often should it done:</strong> anywhere between
                  every 60k to 100k miles.
                </p>
                <p>
                  <strong>What is it:</strong> It turns the camshafts in the
                  engine.
                </p>
                <p>
                  <strong>Why it happens:</strong> Naturally over time, the wear
                  and tear of the engine will tear and stretch the belt.
                </p>
                <p>
                  <strong>What happens if left unaddressed:</strong> The belt
                  will tear and the engine won’t work.
                </p>
              </div>

              <div className="info">
                <li id="fluid">Transmission Fluid</li>
                <p>
                  <strong>How often should it done:</strong> anywhere between
                  every 30k to 60k miles.
                </p>
                <p>
                  <strong>What is it:</strong> the transmission fluid is a
                  lubricant, lessening the stress on the metal mechanism within
                  the transmission.
                </p>
                <p>
                  <strong>Why it happens:</strong> The fluid deteriorates over
                  time, making it less effective.
                </p>
                <p>
                  <strong>What happens if left unaddressed:</strong> The system
                  will overheat, causing the metal pieces to melt together and
                  “freeze” the system.
                </p>
              </div>
            </ul>
          </div>
          <div>
            <h4>Keep Yourself Safe, Get Car Insurance Today:</h4>
            <a href="https://www.statefarm.com/insurance/auto" target="_blank">
              <button className="btn">State Farm</button>
            </a>
          </div>
        </div>
      </div>

      <ScrollUp />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  li {
    font-size: 1.5rem;
    font-weight: bold;
  }
  a {
    color: var(--color-bg);
  }
  .arrow {
    font-size: 2rem;
    padding-left: 2rem;
    padding-top: 1rem;
    background-color: #e3b0b7;
  }
  .info {
    padding-bottom: 2rem;
  }
  .home-info {
    padding: 4rem 2rem;
  }
  .title {
    padding-bottom: 3rem;
  }
  .intro {
    padding-bottom: 3rem;
  }
  .mouse {
    display: flex;
    position: absolute;
    bottom: 2rem;
    left: 1rem;
    align-items: center;
    gap: 0.5rem;
  }
  .boxes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    jusify-content: space-between;
    align-item: center;
    padding-bottom: 3rem;
  }
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #efefef;
    border-radius: 10px;
    padding: 2rem;
  }
  .box:hover {
    background-color: #79c3e6;
    transition: var(--transition);
  }
  .list {
    padding-bottom: 1.5rem;
  }
  .house-image {
    height: 100vh;
    background-color: #e3b0b7;
    padding-top: 16rem;
    text-align: center;
  }
  h4 {
    padding-bottom: 1rem;
  }
  .btn {
    background-color: #d62311;
    width: max-content;
    display: inline-block;
    color: var(--color-white);
    font-weight: 600;
    font-size: 1rem;
    padding: 0.6rem 1.1rem;
    border-radius: 0.4rem;
    cursor: pointer;
    ${"" /* border: 3px solid var(--color-white); */}
    transition: var(--transition);
  }

  .btn:hover {
    background-color: transparent;
    border: 1px solid #d62311;
    color: var(--color-bg);
  }
  @media screen and (min-width: 900px) {
    .img-car {
      height: 600px !important;
    }
    .house-image {
      padding-top: 4rem;
    }
  }
`;
