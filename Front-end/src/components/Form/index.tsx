import * as S from "./styled";
import LogoGrafismo from "../../assets/grafismo.png";
import LogoProfile from "../../assets/tatiana.png";
import LogoVector from "../../assets/Vector.png";
import { Button, TextField } from "@mui/material";

export const Form = () => {
    return (
        <S.Container>
            <S.HeaderForm>
                <S.DivGrafismo>
                    <img width={"100%"} src={LogoGrafismo} alt="profile" />
                </S.DivGrafismo>

                <S.DivProfile>
                    <img width={"100%"} src={LogoProfile} alt="profile" />
                </S.DivProfile>
            </S.HeaderForm>
            <S.Form>
                <S.ContentItemTouch>
                    <S.DivTouch>
                        <img width={"25px"} src={LogoVector} alt="e-mail" />
                    </S.DivTouch>
                    <S.DivTouchText>
                        <span>GET IN </span>
                        <span>
                            <strong>TOUCH</strong>
                        </span>
                    </S.DivTouchText>
                </S.ContentItemTouch>

                <S.DivToItemTextField>
                    <span>You name</span>
                    <TextField
                        placeholder="type your name here..."
                        variant="outlined"
                    />
                </S.DivToItemTextField>
                <S.ContentItemForm>
                    <S.DivToItemEmail>
                        <span>Email*</span>
                        <TextField
                            placeholder="example@example.com"
                            variant="outlined"
                        />
                    </S.DivToItemEmail>
                    <S.DivtoItemPhone>
                        <span>Telephone*</span>
                        <TextField
                            placeholder="( ) ____-____"
                            variant="outlined"
                        />
                    </S.DivtoItemPhone>
                </S.ContentItemForm>
                <S.ContentItemMessage>
                    <span>Message*</span>
                    <TextField
                        placeholder="Type what you want to say to us"
                        variant="outlined"
                        multiline
                        rows={4}
                    />
                </S.ContentItemMessage>
                <S.DivToItemButton>
                    <Button
                        size="large"
                        fullWidth
                        variant="contained"
                    >
                        <span>Send now</span>
                    </Button>
                </S.DivToItemButton>
            </S.Form>
        </S.Container>
    );
};