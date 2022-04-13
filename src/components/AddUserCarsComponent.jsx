import React, { Component } from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Avatar } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";


// Material Icons

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { pink } from '@mui/material/colors';



class AddUserCardsComponent extends Component {
    //definicao das props e state
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            nome: '',
            sexo: '',
            idade: ''
        }
        this.saveUser = this.saveUser.bind(this);
    }
    //salva o usuario no backend
    saveUser = (e) => {
        //TODO: obtem os dados do state e envia para o backend salvar os dados
        this.setState({ nomeVazio: (this.state.nome === "") });
    }
    //modifica o valor do state do campo alterado
    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
    //renderiza o componente
    render() {
        return (
            <Container maxWidth="sm">
                <div>
                    <form>
                        <Grid container
                            alignItems="center"
                            direction="column">
                            <Avatar sx={{ bgcolor: pink[500] }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <h2>Sign Up</h2>
                            <Grid container
                                direction="row"
                                spacing={0}>
                                <Grid items xs={6}>
                                    <TextField
                                        label="First Name"
                                        required
                                        helperText={this.state.nomeVazio ? "Preencha o campo" : null} error={this.state.nomeVazio}>
                                        onChange={this.onChange}
                                    />
                                </Grid>
                                <Grid items xs={6}>
                                    <TextField
                                        label="Obeservações"
                                        onChange={this.onChange}
                                    />
                                </Grid>
                            </Grid>
                            <Button variant="contained" color="primary" disableElevation onClick={(e) => {
                                this.saveUser(e)
                            }}>
                                Salvar
                            </Button>
                        </Grid>
                    </form>
                </div >
            </Container >
        );
    }
}
export default AddUserCardsComponent
