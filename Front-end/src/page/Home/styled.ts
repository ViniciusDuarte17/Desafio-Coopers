import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vw;
    display: flex;
    flex-direction: column;
    color: #000000;
    background-color:#FFFFFF;
    font-family: sans-serif;
`

export const Header = styled.header`
    display: flex;
    width: 95%;
    justify-content: space-between;
    align-items: center;
    padding: 2%;
`

export const Img = styled.img `
    width: 10em;
`

export const Button = styled.button`
    position: absolute;
    margin-left: 85vw;
    margin-top: -2.5%;
    background-color: #000000;
    color:#FFFFFF;
    border: none;
    height: 2.5em;
    width: 7.5em;
    top: 54px;
    border-radius: 0px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    cursor: pointer;
    :hover{
        background-color:#000a50;
    }
`

export const Section = styled.section`
    width: 100%;
    display: flex;
`

export const OrganizeToDoList = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    margin: 5%;
`

export const TextSpanOrganize = styled.span`

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 64px;
    margin-bottom: 2%;

    color: #000000;

`

export const TextSpanJoby= styled.span`

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 64px;
    margin-bottom: 2%;

    color: #4AC959;

`

export const TextSpan = styled.span`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    color: #000000;
    margin-top: 5%;
    margin-bottom: 5%;
`


export const NavTodoList = styled.nav`
    padding: 2.5%;
`

export const ButtonTodoList = styled.button`
    border: none;
    width: 300px;
    height: 64px;
    border-radius: 10px;
    background-color: #4AC959;

    cursor: pointer;
    :hover{
        background-color:  #4AC980;
    }

    span{
        font-family: Montserrat;
        font-size: 24px;
        font-weight: 600;
        line-height: 29px;
        letter-spacing: 0px;
        text-align: center;
        color: #FFFFFF;
    }
`

//  --- LADO ESQUERDO DA PÁGINA --- 


export const ContentDiv = styled.div`
    width: 50%;
    margin-top: -6%;
    border: 1px solid black;
`

export const DrawingLogo = styled.div`
   display: flex;
   flex-direction: row-reverse;
`