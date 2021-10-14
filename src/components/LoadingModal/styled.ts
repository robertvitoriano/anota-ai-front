import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Translucent = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: absolute;
  top: 0;
  z-index: 1;
  opacity: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Circle = styled.div`
  width:150px;
  height:150px;
  border:20px solid transparent;
  border-bottom-color:#2b2b2a;
  border-left-color:#2b2b2a;
  border-radius:50%;
  z-index: 3;
  position:relative;
`;

export const Modal = styled.div`
width:600px;
height:400px; 
background-color:#DDD8DE;
display:flex; 
flex-direction:column; 
align-items:center;
justify-content:center;
z-index:9999;
border-radius: 15px;



`