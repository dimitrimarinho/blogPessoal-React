import React from "react";
import {Box} from '@mui/material';
import {Button, Paper} from '@material-ui/core';
import './Home.css';

function Home(){
    return(
        <>
            <Paper>
                <Box p={2}>
                    <Box display="flex" justifyContent="center">
                        <h1>Título</h1>
                    </Box>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQiN3TbqjsJ_n3aCMSV0eM5ckoYXHv4Tmzng&usqp=CAU" alt="" style={{ width: "100%", height: "100%" }} />
                    <Box display="flex" justifyContent="center" p={2}>
                        <Button variant="contained" color="primary">Texto 1</Button>
                        <Button variant="contained" color="secondary">Texto 2</Button>
                    </Box>
                </Box>
            </Paper>
        </>        
    );
}

export default Home;