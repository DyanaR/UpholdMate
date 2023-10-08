import React, {useState} from 'react'
import {HiArrowSmUp} from 'react-icons/hi';
import styled from "styled-components";



const ScrollUp = () =>{
  
    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 500){
        setVisible(true)
      } 
      else if (scrolled <= 500){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
    <Container>
      <div>
      <button style={{display: visible ? 'inline' : 'none'}} onClick={scrollToTop} >
        <HiArrowSmUp />
      </button>
    </div>
    </Container>
    );
  }

  const Container = styled.div`

        button { 
            position: fixed; 
            padding-top: .3rem;
            border-radius: 50px;
            width: 2.7rem;
            height: 2.7rem;
            right: 1rem;
            bottom: 1rem;
            z-index: 1;
            cursor: pointer;
            color: var(--color-white);
            background-color: var(--color-bg);
            font-size: 2rem;
        }
        button:hover{
            background-color: #2F302E;
        }
      
  `;


export default ScrollUp