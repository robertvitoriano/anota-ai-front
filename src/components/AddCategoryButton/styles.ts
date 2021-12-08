import styled from 'styled-components'

interface WrapperProps {
    selectedCategoryName: string

}

export const Wrapper = styled.div<WrapperProps>`
border: dashed 4px #370502;
display: flex;
justify-content:${({selectedCategoryName})=>selectedCategoryName?'center':'space-evenly'};
align-items: center;
width:${({selectedCategoryName})=>selectedCategoryName?'none':'10rem'};
color: #370502;
font-weight: bold;
border-radius: 10%;
font-size: ${({selectedCategoryName})=>selectedCategoryName?'1.2rem':'normal'};
&:hover{
    cursor: pointer;
}
padding: ${({selectedCategoryName})=>selectedCategoryName?'0.5rem':'0'};

`

export const PlusSign = styled.div`
font-size: 2rem;

&:after{
    content: '+';

}


`