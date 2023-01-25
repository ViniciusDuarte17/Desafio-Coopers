import * as S from "./styled";
import { ReactNode } from "react";
import Logo from "../../assets/logo.png";

interface Props {
    children: ReactNode
}

export const Header = ({ children }: Props) => {


    return (
        <S.ContainerHeader>
            header inicial
        </S.ContainerHeader>
    )
}