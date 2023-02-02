import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 6%;
`


export const HeaderForm = styled.div`
    display: flex;
    margin: auto;
    height: 35vh;
    width: 40%;
    border-radius: 0px;
`

export const DivGrafismo = styled.div`
    display: flex;
    align-items: center;
    img {
        margin-left: 65%;
    }
`


export const DivProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        margin: auto;
        border-radius: 100%;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 45vw;
    border: 2px solid rgba(6, 21, 43, 0.08);
    border-top: none;
    border-bottom: none;
    margin: auto;
    margin-top: -7%;
    margin-bottom: 2%;
    border-radius: 16px;

    @media screen and (min-width: 780px) and (max-width: 905px){
        width: 40%;
        height: 80vh;
    }
    @media screen and (min-width: 450px) and (max-width: 779px){
        width: 65%;
        height: 85vh;
    }
    @media screen and (min-width: 100px) and (max-width: 449px){
        width: 85%;
        height: 85vh;
    }

`

export const ContentItemTouch = styled.div`
    display: flex;
    width: 29%;
    margin-top: 17%;
    margin-left: 6%;
`

export const DivTouch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #46BD62;
    width: 40px;
    height: 40px;
`

export const DivTouchText = styled.div`
    margin-left: 7%;
`

export const DivToItemTextField = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5%;
    width: 85%;
    margin-left: 10%;
    padding-bottom: 3%;
    span {
        color: #06152B;
        padding-bottom: 1.5%;
    }
`

export const DivToItemEmail = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    span {
        color: #06152B;
        padding-bottom: 1.5%;
    }

`


export const DivtoItemPhone = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    span {
        color: #06152B;
        padding-bottom: 1.5%;
    }
`

export const ContentItemForm = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-left: 4%;
`

export const ContentItemMessage = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    margin-top: 4%;
    margin-left: 10%;
    span{
        color: #06152B;
        margin-bottom: 1.5%;;
    }
`

export const DivToItemButton = styled.div`
     width: 85%;
     margin-top: 5%;
     margin-left: 10%;
     span {
        font-family: Montserrat;
        font-style: Bold;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 8%;
        color: #FFFFFF;
     }
`