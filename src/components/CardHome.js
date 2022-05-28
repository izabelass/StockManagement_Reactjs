import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


export default function CardHome() {
    const card = (
        <Container maxWidth="xl">
            <CardContent>
                <Typography sx={{ fontSize: 48 }} color="text.secondary" gutterBottom>
                    Bem vindo!
                </Typography>
                <Typography variant="h5" component="div">
                    Este é o seu sistema, utilize a barra de navegação para acessar as páginas
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => {
                    navigate('/Cadastro');
                }} size="large" variant="contained">
                    Cadastrar
                </Button>
            </CardActions>
        </Container>
    );

    let navigate = useNavigate();

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}
