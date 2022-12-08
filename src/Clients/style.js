import styled from "styled-components";

export const Container = styled.div`
background-color: #0A0A10;
height: 100%;
min-height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
gap:25px;
`

export const Requests = styled.li`
width: 342px;
height: 101px;
display: flex;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
p{
font-weight: 300;
font-size: 18px;
line-height: 21px;
}

button{
    background: none;
    border: none;
    cursor: pointer;
}
`

