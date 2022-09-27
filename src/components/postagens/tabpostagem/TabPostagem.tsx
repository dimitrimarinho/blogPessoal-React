import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab'
import React, { useState } from 'react';
import { Box } from "@mui/material";
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css'

function TabPostagem() {

    const [value, setValue] = useState('1')

    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }

    return (
        <>
            <TabContext value={value}>
                <AppBar position="static">
                    <Tabs centered indicatorColor="secondary" onChange={handleChange}>
                        <Tab label="Todas as postagens" value="1" />
                        <Tab label="Sobre-nós" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1">
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sed dolor sequi soluta aut velit aperiam adipisci neque optio, recusandae delectus obcaecati mollitia consequatur repudiandae iste exercitationem tempore ad labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis id laudantium doloremque perferendis cupiditate ab at incidunt placeat aspernatur? Earum quis eius magni voluptate eveniet laboriosam deleniti, commodi cum qui.</Typography>
                </TabPanel>
            </TabContext>
        </>
    )
}

export default TabPostagem;