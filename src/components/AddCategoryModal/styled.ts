import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;
export const Translucent = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: absolute;
  top: 0;
  z-index: 10;
  opacity: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Modal = styled.div`
width:500px;
height:400px; 
background-color:#DDD8DE;
z-index:9999;
border-radius: 15px;
display:flex;
justify-content:center;
align-items:center;
overflow:auto;
&::-webkit-scrollbar {
    width: 1em;
    display:none;

}
&::-webkit-scrollbar-track {
    background-color: transparent;
    display:none;


}
&::-webkit-scrollbar-thumb {
  background-color: #817059;
  border-radius:10px;
  display:none;
  
}
opacity:0.9;

`

export const CategoryList = styled.div`
height:100%;
width:100%;
position:relative;


`;



export const Category = styled.div`
padding:2rem;
border:1px solid black;
color:black;
text-align:center;
background-color: #EFEFEF;
font-weight: bold;
font-size: 1.5rem;
:hover{
  cursor: pointer;
  background-color: #817059;
  color:white;
}
`;

