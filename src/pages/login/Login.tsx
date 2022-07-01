import React, { ChangeEvent, useState } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Box } from "@mui/material"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "./Login.css";
import UserLogin from '../../model/UserLogin';

function Login() {
    let navigate = useNavigate();   
    const [getEmail, setEmail] = useState('Lucas@email.com');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    // function modificaEmail() {
    //     setEmail('Admin@email.com')
    // }

    function updatedModel(e: ChangeEvent<HTMLInputElement) {
        setUserLogin({
            ...UserLogin,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try{
            const resposta = await api.post('/usuarios/logar', userLogin)
            alert('Usuário Logado com sucesso!')
            navigate('/home')
        } catch(error){
            alert('Informações inconsistentes ao logar')
        }
    }

    return (
        <Grid container direction='row' justifyContent="center" alignItems="center">
            <Grid alignItems="center" xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="textos1">Entrar</Typography>
                        <TextField id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Typography variant='subtitle1' gutterBottom align='center' className="textos1">Cadastre-se</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className="imagem">

            </Grid>
        </Grid>
    );
}

export default Login;