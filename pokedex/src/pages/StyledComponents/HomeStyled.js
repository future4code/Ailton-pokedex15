import styled from "styled-components"

export const Background = styled.div`
background-color: #5E5E5E;
width:100%;
margin: auto;
`

export const Title = styled.h1`
width: 80%;
position: relative;
margin: 4vh;
left: -4vw;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
color: #FFFFFF;
text-transform: none;
@media only screen and (max-width: 800px){
    font-size: 30px;
    margin: 0;
    left: -7vw;
}
`

export const MapContainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`

export const LoadMoreButton = styled.button`
width: 14vw;
height: 7vh;
margin-top: 1vh;
margin-bottom: 1vh;
margin-left: 43vw;
background-color: #33A4F5;
border-radius: 8px;
border: none;
color: white;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 18px;
&:hover{
background-color: #63bbfa;
cursor: pointer;
}
@media only screen and (max-width: 800px) {
    width: 160px;
    height: 50px;
    font-size: 12px;
    margin-left: 30vw;
}
`

export const ModalContainer = styled.div`
width: 100%;
height: 100%;
display: ${props=>props.modal};
position: fixed;
top: 0; 
background-color:  rgba(0, 0, 0, 0.3);
`

export const Modal = styled.p`
color: black;
margin: auto;
padding-top: 10% ;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
text-transform: none;
text-align: center;
@media only screen and (max-width: 800px){
    font-size: 30px;
    padding: 0;
}
`

export const Modal2 = styled.p`
color: black;
margin: auto;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
text-transform: none;
text-align: center;
@media only screen and (max-width: 800px){
    font-size: 14px;
}
`
export const CloseButton = styled.button`
width: 30%;
height: 15%;
display: block;
margin: auto;
margin-top: 5%;
background-color: #FF6262;
border-radius: 8px;
border: none;
color: white;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 12px;
&:hover{
background-color:#ffa9a9;
cursor: pointer;
}
`
export const DarkContainer = styled.div`
width: 451px;
height: 222px;
margin: auto;
margin-top: 20%;
background-color: white;
display:block;
border: 1px solid #888;
border-radius: 12px;
@media only screen and (max-width: 800px){
    width: 80vw;
    height: 25vh;
    margin: auto;
    margin-top: 35vh;
}
`