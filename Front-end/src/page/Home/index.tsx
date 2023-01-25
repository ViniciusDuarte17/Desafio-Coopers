import React from "react";
import * as S from "./styled";
import Logo from "../../assets/coopers.png";
import ImgLogo from "../../assets/coopersBg.png";

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
            <S.DrawingLogo>
              <img width={"72%"} src={ImgLogo} alt="Logo coopers"/>
            </S.DrawingLogo>
            <div>
              img bonita
            </div>
        </S.ContentDiv>

      </S.Section>

    </S.Container>
  )
}