import * as React from 'react';
import * as S from "./styled";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoCoopersBg from "../../assets/coopersBg.png";


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

interface Props {
    logoImg: any,
    text: string
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export const CardGood = ({logoImg, text}: Props) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <S.Container>
            <Card sx={{ maxWidth: 330 }}>
                <CardMedia
                    component="img"
                    height="194"
                    image={logoImg}
                    alt="Paella dish"
                />
                <S.CoopersImg>
                    <img width={"12%"} src={logoImg} alt="Logo do coopers" />
                </S.CoopersImg>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Sobre:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering
                            </Typography>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                medium-high heat. Add chicken.
                            </Typography>
                        </CardContent>
                    </Collapse>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <Button>Leia mais</Button>
                    </ExpandMore>
                </CardActions>
            </Card>
        </S.Container>
    );
}