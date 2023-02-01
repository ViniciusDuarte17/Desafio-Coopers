import * as S from "./styled";
import LogoGrafismo from "../../assets/grafismo.png";
import LogoProfile from "../../assets/tatiana.png";
import LogoVector from "../../assets/Vector.png";
import { Button, TextField } from "@mui/material";
import { useForm } from "../../hooks/useForm";
import emailjs from "@emailjs/browser";
import { RemoveFromQueue } from "@mui/icons-material";

export const Form = () => {

    const { form, onChange, clean } = useForm(
        { name: "", email: "", phone: '', message: ""}
    );

    const senEmail = (event: React.ChangeEvent<HTMLInputElement> | any) => {
        event.preventDefault();
        console.log(form)
        const templatePrams = {
            from_name: form.name,
            from_phone: form.phone,
            message: form.message,
            email: form.email
        }

        emailjs.send("service_inf0kgn", "template_zwd537c", templatePrams, "jXJRYGqqcSDqvmY-A")
        .then( (res) => {
            console.log("EMAIL ENVIADO", res.status,res.text)
        }, (err) => {
            console.log(err)
        })
        clean()
    }
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
            <S.Form onSubmit={senEmail}>
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
                        type={'text'}
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        placeholder="type your name here..."
                        variant="outlined"
                        required
                    />
                </S.DivToItemTextField>
                <S.ContentItemForm>
                    <S.DivToItemEmail>
                        <span>Email*</span>
                        <TextField
                            type={'email'}
                            name={"email"}
                            value={form.email}
                            onChange={onChange}
                            placeholder="example@example.com"
                            variant="outlined"
                            required
                        />
                    </S.DivToItemEmail>
                    <S.DivtoItemPhone>
                        <span>Telephone*</span>
                        <TextField
                            type={'number'}
                            name={"phone"}
                            value={form.phone}
                            onChange={onChange}
                            placeholder="( ) ____-____"
                            variant="outlined"
                            required
                        />
                    </S.DivtoItemPhone>
                </S.ContentItemForm>
                <S.ContentItemMessage>
                    <span>Message*</span>
                    <TextField
                        type={'text'}
                        name={"message"}
                        value={form.message}
                        onChange={onChange}
                        placeholder="Type what you want to say to us"
                        variant="outlined"
                        multiline
                        rows={4}
                        required
                    />
                </S.ContentItemMessage>
                <S.DivToItemButton>
                    <Button
                        size="large"
                        fullWidth
                        variant="contained"
                        type="submit"
                    >
                        <span>Send now</span>
                    </Button>
                </S.DivToItemButton>
            </S.Form>
        </S.Container>
    );
};