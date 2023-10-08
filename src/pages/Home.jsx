import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import house from "../assets/house.png";
import { BsMouse } from "react-icons/bs";

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
          <img src={house} alt="logo" style={{ height: "300px" }} />
          <div className="mouse" style={{fontSize: '2rem'}}>
          <BsMouse />
          <h6>SCROLL DOWN</h6>
          </div>
        </div>
        <div></div>
       
        <div className="title">
          <h1>HOME MAINTENANCE</h1>
        </div>
      </div>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  .arrow {
    font-size: 2rem;
    padding-left: 2rem;
    padding-top: 1rem;
    background-color: #79c3e6;
  }
  .title {
    padding-left: 2rem;
  }
  .mouse{
    display: flex;
    position: absolute;
    bottom: 2rem;
    left: 1rem;
    align-items: center;
    gap: .5rem;
  }
  .house-image {
    height: 100vh;
    background-color: #79c3e6;
    padding-top: 16rem;
    text-align: center;
    ${"" /* position: fixed; */}
    ${"" /* z-index: 1; */}
    ${"" /* top: 22rem; */}
    ${"" /* left: 50%; */}
    ${
      "" /* left: 50%;
    transform: translate(-50%, 0); */
    }
  }
`;
