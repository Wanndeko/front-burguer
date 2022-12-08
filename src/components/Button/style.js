import styled from "styled-components"


export const Button = styled.button`

width: 342px;
height: 68px;
margin-top: 76px;
margin-bottom: 10px;

font-weight: 900;
font-size: 17px;
line-height: 2px;
border: none;

background:${props => props.is_back ? 'rgba(255, 255, 255, 0.14)' : '#D93856'} ;
cursor: pointer;
:hover{
    opacity: 0.5;
}
:active{
    opacity: 0.3;
}

`
