import "./App.css";
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Car from "./pages/Car";
import Life from "./pages/Life";
import styled from "styled-components";
import Homepage from "./components/Homepage";


function App() {
  

  return (
    <Container>
    <Routes>
    <Route path="/" element={<Homepage/>} />
   
    </Routes>
      <Routes>
      <Route path="/home" element={<Home />} />
      </Routes>
      <Routes>
      <Route path="/car" element={<Car />} />
      </Routes>
      <Routes>
      <Route path="/life" element={<Life />} />
    </Routes>
    </Container>
  );
}


export default App;

const Container = styled.div`
  
`;
