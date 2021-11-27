import { Input } from './../../pages/Unauth/SignUp/styles';
import styled from "styled-components";

interface CategoryProps {
  isSelected?: boolean;
}


export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;
export const Translucent = styled.div`
  width: 100%;
  height: 100%;
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
position:absolute;

`

export const CategoryList = styled.div`
height:100%;
width:100%;
position:relative;
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


`;

export const Category = styled.div<CategoryProps>`
padding:2rem;
border:1px solid black;
color: ${({ isSelected }) => isSelected ? "white" : "black"};
text-align:center;
background-color:${({ isSelected }) => isSelected ? '#817059' : '#EFEFEF'};
font-weight: bold;
font-size: 1.5rem;
:hover{
  cursor: pointer;
  background-color:${({ isSelected }) => isSelected ? '#817059' : '#cfcccc'};
  color:${({ isSelected }) => isSelected ? "white" : "black"};

  input{
    background-color:#cfcccc;
    color:black;
}
}
`

export const CreateCategoryButton = styled.div`
width:4rem;
height:4rem;
border-radius:50%;
background-color: #817059;
color:white;
font-weight: bold;
font-size: 3.5rem;
position:absolute;
bottom:0.5rem;
right:0.5rem;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
:hover{
  cursor: pointer;
  background-color: #370502;
  color:white;
}

`;

export const CreateCategoryInput = styled.input`
position:absolute;
bottom:0.5rem;
right:0.5rem;
`;

export const NewCategoryInput = styled.input`
border:none;
background-color: #EFEFEF;
outline:none;
font-size: 1.5rem;
font-weight: bold;
text-align: center;
width:100%;
height:100%;
:hover{
  cursor: text;
  background-color: #cfcccc;
}

`;

export const SelectCategoryButton = styled.div`
width:4rem;
height:4rem;
border-radius:50%;
background-color: #817059;
color:white;
font-weight: bold;
font-size: 3.5rem;
position:absolute;
bottom:0.5rem;
right:0.5rem;

`;