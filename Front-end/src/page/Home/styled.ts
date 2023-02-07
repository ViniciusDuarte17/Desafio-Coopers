import styled from "styled-components";
import BackGroundImg from "../../assets/black.png";
import FooterImg from "../../assets/Footer.png";

export const Container = styled.main`
    width: 100%;
    min-height: 100vw;
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

export const Img = styled.img`
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

    @media screen and (min-width: 717px) and (max-width: 940px){
        width: 5.5em;
    }

    @media screen and (min-width: 560px) and (max-width: 716px){
        width: 4em;
    }

    @media screen and (min-width: 473px) and (max-width: 559px){
        width: 3.2em;
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

export const TextSpanJoby = styled.span`

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


export const NavTodoList = styled.a`
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
`

export const FigureLogo = styled.div`
   display: flex;
   flex-direction: row-reverse;
`

export const Figure = styled.figure`
    position: absolute;
    margin-top: -36%;
    margin-left: 18%;
`

export const FigureIcon = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -8%;
`

export const DragAndDiv = styled.div`
    background-image: url(${BackGroundImg});
    padding: 10%;
    background-size: cover;
    background-position: center;
    margin-bottom: 6%;
`

export const H1 = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2%;
    color: #ffffff;
    flex-wrap: wrap;
`

export const SpanList = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    color: #FFFFFF;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: center; 
`

// container do cart to-do e done

export const ContentTodoNone = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; 
    min-height: 90vh;
    padding-bottom: 5%;
`
export const ItemTodo = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 1 / 2;
    border: 1px solid black;
    margin-left: 36%;
    width:28vw;
    border: 1px solid rgba(66, 66, 66, 0.1985);
    min-height:90vh;
`

export const ItemDone = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 2 / 3; 
    border: 1px solid rgba(66, 66, 66, 0.1985);
    width:28vw;
    min-height: 86vh;


    h2 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 40px;
        line-height: 24px;
     
    }

    span {
        font-family: 'Montserrat';
        margin-top: -2%;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
        color: #000000;
    }
`

export const DivAlignItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ComponentCart = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
`

export const DivTodo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
        margin-bottom: -1%;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 40px;
        line-height: 24px;
        color: #000000;
    }

    span {
         margin-top: 0%;
         font-family: 'Montserrat';
         font-style: normal;
         font-weight: 400;
         font-size: 24px;
         line-height: 29px;
         text-align: center;
         color: #000000;
    }
`

export const GoodThings = styled.div`
    width: 60vw;
    height: 32vw;
    margin: auto;
    background-color: #4AC959;
    margin-bottom: 10%;
    @media  screen and (min-width: 985px) and (max-width: 1068px){
        margin-bottom: 25%;
     
    }

    @media  screen and (min-width: 850px) and (max-width: 984px){
        margin-bottom: 35%;
        
    }
    @media  screen and (min-width: 720px) and (max-width: 849px){
        margin-bottom: 52%;
       
    }
    @media  screen and (min-width: 585px) and (max-width: 719px){
        margin-bottom: 70%;
       
    }
    @media  screen and (min-width: 400px) and (max-width: 584px){
        margin-bottom: 90%;
       
    }
    @media  screen and (min-width: 300px) and (max-width: 499px){
        margin-bottom: 100%;
    }
`

export const DivTextGood = styled.div`
    display: flex;
    width: 20vw;
    margin-left: 8%;
    justify-content: center;
    margin-top: 6%;
    margin-bottom: 4%;

    span {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 110%;
        color:#ffffff;
    }
`

export const ContentCardGood = styled.div`
    display: flex;
    margin-left: 6%;
`

export const DivEllips = styled.div`
    width: 99%;
    padding: .5%;
    display: flex;
    align-items: center;
`

export const Div = styled.div`
    margin: auto;
    width: 10%;
    display: flex;
    justify-content: space-around;
`

// Daqui para baixo estilização do footer

export const Footer = styled.footer`
    width: 100%;
    height: 18vw;
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
    background-image: url(${FooterImg});
    span {
        margin: .5%;
        color: #ffff;
    }
    p{
        margin: .5%;
        color: #ffff;
        font-size: 14px;
    }
`

export const DivFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 4%;
`

export const DivImgFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 2%;
`

export const AlignButton = styled.div`
    width: 70%;
    margin: auto;
`

export const AlignButtonTodo = styled.div`
    width: 70%;
    margin: auto;
    margin-top: 6%;
    margin-bottom: 6%;
`