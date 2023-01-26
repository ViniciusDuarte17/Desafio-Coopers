import React from "react";
import * as S from "./styled";
import Logo from "../../assets/coopers.png";
import ImgLogo from "../../assets/coopersBg.png";
import ApLogo from "../../assets/ap.jpg";
import IconsScroll from "../../assets/iconScroll.png";

export const Home: React.FC = () => {

  return (
    <S.Container>

      <S.Header>
        <S.Img src={Logo} alt="logo coopers" />
        <S.Button>
          entrar
        </S.Button>
      </S.Header>

      <S.Section>

        <S.OrganizeToDoList>

          <S.TextSpanOrganize>
            Organize
          </S.TextSpanOrganize>

          <S.TextSpanJoby>
            your daily jobs
          </S.TextSpanJoby>

          <S.TextSpan>
            The only way to get things done
          </S.TextSpan>

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
          Drag and drop to set your main priorities, check when done and
          create what´s new.
        </S.SpanList>
      </S.DragAndDiv>
    </S.Container>
  )
}