import styled from "styled-components";

export const Container = styled.div`
background-color: #0A0A10;
height: 100%;
min-height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
gap:25px;
 
> img{
    height: 286px;
} 
`

export const Requests = styled.li`
width: 342px;
height: 101px;
padding: 16px;
display: flex;
flex-direction: row;
justify-content: space-between;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
margin-bottom:18px;

div{
    display: flex;
    flex-direction: column;
    justify-content:space-around;
}

button{
    background: none;
    border: none;
    cursor: pointer;
}
`

export const P_order =styled.p`
font-weight: 300;
font-size: 18px;
line-height: 21px;
margin-bottom: 8px;
`

export const P_name = styled.p`
font-weight: 700;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
`


