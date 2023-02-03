import * as S from "./styled";
import {DragSourceMonitor, useDrag} from "react-dnd";

interface Props {
    img?: string,
    text?: string,
    id?: string
}

export const CardTodo = ({ img, text, id }: Props) => {

    const [{ isDragging }, drag] = useDrag(
        () => ({
          type: "str",
          item:{id: id},
          collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging(),
          }),
        }),
      )

    return (
        <S.Container>
            <S.ContentDone ref={drag} >
                <img src={img} alt="Logo de status" />
                <span style={{border: isDragging ? "1px solid #46BD62" : "none"}}>{text}</span>
            </S.ContentDone>
        </S.Container>
    )
}
