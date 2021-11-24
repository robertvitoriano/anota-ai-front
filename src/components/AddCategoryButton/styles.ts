import styled from 'styled-components'

export const Wrapper = styled.div`
border: dashed 4px #370502;
padding: 0.5rem 2rem;
display: flex;
justify-content: space-between;
align-items: center;
`

export const PlusSign = styled.span`
font-weight: bold;
font-size: 3rem;
color: #370502;
&:after{
    content: '+';
}


`