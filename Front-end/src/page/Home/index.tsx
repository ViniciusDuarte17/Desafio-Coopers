import React from "react";
import * as S from "./styled";
import Logo from "../../assets/coopers.png";
import ImgLogo from "../../assets/coopersBg.png";
import ApLogo from "../../assets/ap.jpg";
import IconsScroll from "../../assets/iconScroll.png";
import RectanglePng from "../../assets/Rectangle.png";
import RectangleDone from "../../assets/RectangleDone.png";
import { CardGood } from "../../components/CardGood";
import LogoImgArt2 from "../../assets/bitmapArt2.png";
import LogoBitmap from "../../assets/bitmap.png";
import LogoBitmapArt from "../../assets/bitmapArt.png";
import LogoEllipseGreen from "../../assets/ellipseGreen.png";
import LogoEllipseNone from "../../assets/ellipseNone.png";
import { Form } from "../../components/Form";

export const Home: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Img src={Logo} alt="logo coopers" />
        <S.Button>entrar</S.Button>
      </S.Header>

      <S.Section>
        <S.OrganizeToDoList>
          <S.TextSpanOrganize>Organize</S.TextSpanOrganize>

          <S.TextSpanJoby>your daily jobs</S.TextSpanJoby>

          <S.TextSpan>The only way to get things done</S.TextSpan>

          <S.NavTodoList>
            <S.ButtonTodoList>
              <span>Go to to-do list</span>
            </S.ButtonTodoList>
          </S.NavTodoList>
        </S.OrganizeToDoList>

        <S.ContentDiv>
          <S.FigureLogo>
            <img width={"78%"} src={ImgLogo} alt="Logo coopers" />
          </S.FigureLogo>
          <S.Figure>
            <img width={"89%"} src={ApLogo} alt="imagem do ap" />
          </S.Figure>
        </S.ContentDiv>
      </S.Section>
      <S.FigureIcon>
        <img src={IconsScroll} alt="icons sete" />
      </S.FigureIcon>
      <S.DragAndDiv>
        <S.H1>To-do List</S.H1>
        <S.SpanList>
          Drag and drop to set your main priorities, check <br /> when done and
          create what´s new.
        </S.SpanList>
      </S.DragAndDiv>

      <S.ContentTodoNone>
        <S.ItemTodo>
          <img width={"100%"} height={"5%"} src={RectanglePng} alt="todo" />

          <S.DivTodo>
            <h2>To-do</h2>
            <br />
            <span> Take a breath. </span>
            <span>Start doing. </span>
          </S.DivTodo>
        </S.ItemTodo>
        <S.ItemDone>
          <img width={"100%"} height={"5%"} src={RectangleDone} alt="done" />

          <div>
            <h2>Done</h2>
            <span>Congratulions! </span>
            <span>
              <strong>You have done 5 tasks</strong>
            </span>
          </div>
        </S.ItemDone>
      </S.ContentTodoNone>

      <S.GoodThings>
        <S.DivTextGood>
          <span>good things</span>
        </S.DivTextGood>

        <S.ContentCardGood>
          <CardGood
            logoImg={LogoBitmap}
            text="Organize your daily job enhance your life performance"
          />
          <CardGood
            logoImg={LogoBitmapArt}
            text="Mark one activity as done makes your brain understands the power of doing."
          />
          <CardGood
            logoImg={LogoImgArt2}
            text="Careful with missunderstanding the difference between a list of things and a list of desires."
          />
        </S.ContentCardGood>
      </S.GoodThings>
      <S.DivEllips>
        <S.Div>
          <img width={"15%"} src={LogoEllipseGreen} alt="icon-green" />
          <img width={"15%"} src={LogoEllipseNone} alt="icon-none" />
          <img width={"15%"} src={LogoEllipseNone} alt="icon-none" />
        </S.Div>
      </S.DivEllips>
      <Form />
    </S.Container>
  );
};