import React from "react";
import { Grid, Box, Typography, TextField } from "@material-ui/core"
import "./Login.css";

function Login() {
    return (
        <Grid container>
            <Grid xs={6}>
                <Box>
                    <form>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ fontWeight: "bold" }}>Entrar</Typography>
                        <TextField id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                    </form>
                </Box>
            </Grid>
            <Grid xs={6}>

            </Grid>
        </Grid>
    );
}

export default Login;