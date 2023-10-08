import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import life from "../assets/life.png";
import { BsMouse } from "react-icons/bs";
import { MdRoofing } from "react-icons/md";
import ScrollUp from "../components/ScrollUp";

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
            className="img-life"
            src={life}
            alt="life"
            style={{ height: "400px" }}
          />
          <div className="mouse" style={{ fontSize: "2rem" }}>
            <BsMouse />
            <h6>SCROLL DOWN</h6>
          </div>
        </div>
        <div></div>
        <div className="home-info">
          <div className="title">
            <h1>LIFE MAINTENANCE</h1>
          </div>
          <div className="intro">
            <p>
              There are many elements to owning a car, one of which is
              maintenance. There are many other elements to a car that need to
              be changed besides the tiers and oil. Some of which are: Wheel
              Alignment, Brakes and Rotors, Power Steering, Timing Belt and
              Transmission Fluid. Below we’ll deep dive into each, and why you
              should care about them.{" "}
            </p>
          </div>
          <div className="boxes">
            <a href="#tree">
              <div className="box">
                <MdRoofing />
                Tree Limbs
              </div>
            </a>
            <a href="#flush">
              <div className="box">
                <MdRoofing />
                Flush Water Heater
              </div>
            </a>
            <a href="#gutters">
              <div className="box">
                <MdRoofing />
                Clean Gutters
              </div>
            </a>
            <a href="#seal">
              <div className="box">
                <MdRoofing />
                Seal Driveway
              </div>
            </a>
            <a href="#vent">
              <div className="box">
                <MdRoofing />
                Dry Vent Cleaning
              </div>
            </a>
          </div>
          <div className="list">
            <ul>
              <div className="info">
                <li id="tree">Tree Limbs</li>
                <p>
                  <strong>How often should it done:</strong> All year round.
                </p>
                <p>
                  <strong>What is it: </strong>large branches hanging over the
                  roof.
                </p>
                <p>
                  <strong>Why it happens:</strong> It happens naturally because
                  of the way trees grow.
                </p>
                <p>
                  <strong>What happens if left unaddressed:</strong> Branches
                  can fall during storms causing damage. Get them cut to prevent
                  holes in your roof.
                </p>
              </div>
              <div className="info">
                <li id="flush">Flush Water Heater</li>
                <p>
                  <strong>How often should it done:</strong> Once a year.
                </p>
                <p>
                  <strong>What is it:</strong> It’s when a water heater is
                  completely emptied of water and cold water is sprayed in high
                  powered spurts at the bottom of the tank.
                </p>
                <p>
                  <strong>Why it happens:</strong> Mineral and gunk build up on
                  the bottom of the tank, which can cause courssion.
                </p>
                <p>
                  <strong>What happens if left unaddressed:</strong> The water
                  heater won’t last as long. Flushing it yearly saves you money
                  in the long run.
                </p>
              </div>
              <div className="info">
                <li id="gutters">Clean Gutters</li>
                <p>
                  <strong>How often should it done:</strong> Twice a year.
                </p>
                <p>
                  <strong>What is it:</strong> Removing build up in gutters.
                </p>
                <p>
                  <strong>Why it happens:</strong> Naturally though falling
                  leaves, pine needles, etc.
                </p>
                <p>
                  <strong>What happens if left unaddressed:</strong> Erosion to
                  the gutters, and possible cracks in foundation, walls, and
                  possibly the chimney.
                </p>
              </div>

              <div className="info">
                <li id="seal">Seal Driveway</li>
                <p>
                  <strong>How often should it done:</strong> Every three to 5
                  years.
                </p>
                <p>
                  <strong>What is it:</strong> When Asphalt is poured over a
                  driveway sealing up cracks.
                </p>
                <p>
                  <strong>Why it happens:</strong> Over time Cracks and
                  deformities present themselves in a driveway with use.
                </p>
                <p>
                  <strong>What happens if left unaddressed:</strong> The
                  driveway will fall into disrepair, and eventually have to be
                  completely redone. By sealing it every few years you would
                  save yourself money in the long run.
                </p>
              </div>

              <div className="info">
                <li id="vent">Dryer Vent Cleaning</li>
                <p>
                  <strong>How often should it done:</strong> Once to twice a
                  year.
                </p>
                <p>
                  <strong>What is it:</strong> removing built up lint from the
                  dryer vent.
                </p>
                <p>
                  <strong>Why it happens:</strong> Over time lint builds up in
                  the pipe connected to the dryer, causing a fire hazard.
                </p>
                <p>
                  <strong>What happens if left unaddressed:</strong> It is a
                  potential fire in the making, since lint is very flammable.
                </p>
              </div>
            </ul>
          </div>
          <div>
            <h4>Get Life Insurance Today:</h4>
            <a href="https://www.statefarm.com/insurance/life" target="_blank">
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
    padding-top: 12rem;
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
    .img-life {
      height: 500px !important;
    }
    .house-image {
      padding-top: 7rem;
    }
  }
`;
