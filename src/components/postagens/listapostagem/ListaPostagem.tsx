import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Postagem from "../../../models/Postagem";
import { busca } from "../../../services/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import './ListaPostagem.css';
import { toast } from "react-toastify";

function ListaPostagem() {

    const [posts, setPosts] = useState<Postagem[]>([]);
    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token    
    );
    let navigate = useNavigate();

    useEffect(() => {
        if (token === '') {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })
            navigate('/login')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    async function getPosts() {
        await busca("/postagens", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getPosts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [posts.length])

    return (
        <>
            {
                posts.map(postagem => (
                    <Box m={2}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Postagens
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {postagem.titulo}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {postagem.texto}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {postagem.tema?.descricao}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>
                                    <Link to={`/formularioPostagem/${postagem.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size="small" color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarPostagem/${postagem.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size="small" color="secondary">
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    )
}

export default ListaPostagem;