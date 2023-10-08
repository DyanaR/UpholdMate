import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import life from "../assets/life.png";
import { BsMouse } from "react-icons/bs";
import { RiMentalHealthLine } from "react-icons/ri";
import ScrollUp from "../components/ScrollUp";
import { PiBowlFood } from "react-icons/pi";
import { GiWeightLiftingUp, GiNightSleep, GiNurseFemale } from "react-icons/gi";

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
            <p> </p>
          </div>
          <div className="boxes">
            <a href="#mental">
              <div className="box">
                <RiMentalHealthLine />
                Mental Health Check
              </div>
            </a>
            <a href="#diet">
              <div className="box">
                <PiBowlFood />
                Healthy Diet
              </div>
            </a>
            <a href="#Exercise">
              <div className="box">
                <GiWeightLiftingUp />
                Exercise
              </div>
            </a>
            <a href="#sleep">
              <div className="box">
                <GiNightSleep />
                Sleep
              </div>
            </a>
            <a href="#annual">
              <div className="box">
                <GiNurseFemale />
                Annual Checkups
              </div>
            </a>
          </div>
          <div className="list">
            <ul>
              <div className="info">
                <li id="mental">Mental Health Checkup</li>
                <p>
                  <strong>How often should it done:</strong> It's advisable to
                  have a routine mental health checkup at least once a year.
                </p>
                <p>
                  <strong>What is it: </strong>Assessing emotional well-being
                  and symptoms with a professiona.
                </p>
                <p>
                  <strong>Why it happens:</strong> To improve your emotional welbeing.
                </p>
                <p>
                  <strong>What happens if left unaddressed:</strong> Worsening
                  of mental health conditions, impact on physical health,
                  strained relationship, leading to decreased productivity,
                  absenteeism, or even job loss.
                </p>
              </div>
              <div className="info">
                <li id="diet">Healthy Diet</li>
                <p>
                  <strong>How often should it done:</strong> It is less about how
                  often, and more about how much. A heathy adult should eat
                  about 2,000 to 2,400 calories a day.
                </p>
                <p>
                  <strong>What is it: </strong>Eating healthy foods can
                  dramatically change your life, in so many ways. To best see
                  the good changes it is easiest to compare with what happens if
                  you don’t eat healthy. It’s the difference between a heart
                  attack at 45 and a heart attack at 60.
                </p>
                <p>
                  <strong>Why it happens:</strong> It happens because of
                  science, but more simply "you are what you eat". If you eat good
                  foods, good will come of it, and if you eat bad food, your
                  body will hurt itself in the long run.
                </p>
                <p>
                  <strong>What happens if left unaddressed:</strong> Everything.
                  Obesity comes with so many health risks attached to it, but to
                  say the least: it is that life would not be as enjoyable as it
                  could be.
                </p>
              </div>

              <div className="info">
                <li id="exercise">Exercise</li>
                <p>
                  <strong>How often should it done:</strong> There are different
                  regiments but the general rule of thumb is three intensive
                  workouts a week.
                </p>
                <p>
                  <strong>What is it:</strong> Exercise is physical movement,
                  which is generally strenuous. It improves strength, and the
                  cardiovascular system.
                </p>
                <p>
                  <strong>Why it happens:</strong> Biology! And also hormones. Our bodies and minds work better when we exert ourselves and it's even more true for exercise.
                </p>
                <p>
                  <strong>What happens if left unaddressed:</strong> Not
                  exercising can lead to many health related issues such as
                  cardiovascular diseases and high blood pressure.
                </p>
              </div>

              <div className="info">
                <li id="sleep">Sleep</li>
                <p>
                  <strong>How often should it done:</strong> You should get 8
                  hours of sleep in a day.
                </p>
                <p>
                  <strong>What is it:</strong> When you let your body and mind
                  rest.
                </p>
                <p>
                  <strong>Why it happens:</strong> It happens because our bodies need energy, and resting helps our body to create energy.
                </p>
                <p>
                  <strong>What happens if left unaddressed:</strong> You’ll end
                  up going to sleep whether you like it or not, because at some
                  point your body will override you. Eventually you’ll crash and
                  burn like all the students after this Hackathon.
                </p>
              </div>

              <div className="info">
                <li id="annual">Annual Checkups</li>
                <p>
                  <strong>How often should it done:</strong> Once a year.

                </p>
                <p>
                  <strong>What is it:</strong> When you go to see a family medicine practitioner to see if everything is fine with your body. It also allows you to make a connection with your doctor, for when anything health related does come up.

                </p>
                <p>
                  <strong>Why it happens:</strong> Because it gives the doctor (and yourself) a baseline for your health. If something changes either over time, the doctor (and yourself) can look at your chart and see where and when the changes are coming from.

                </p>
                <p>
                  <strong>What happens if left unaddressed:</strong> You won’t get any health care, and something that may seem normal to you, could be a sign of something going on and a doctor would know the signs. 

                </p>
              </div>
            </ul>
          </div>
          <div>
            <h4>
              Protect What Matters Most, Peace of Mind, Gurranteed. Get Life
              Insurance Today:
            </h4>
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
    background-color: #72C190;
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
    background-color: #72C190;
    transition: var(--transition);
  }
  .list {
    padding-bottom: 1.5rem;
  }
  .house-image {
    height: 100vh;
    background-color: #72C190;
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
