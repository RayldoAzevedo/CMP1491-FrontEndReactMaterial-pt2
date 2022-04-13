import React, { Component } from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Avatar } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";


// Material Icons

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { pink } from '@mui/material/colors';


class AddUserCardsComponent extends Component {
    //definicao das props e state
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            idade: '',
            firstNameVazio: false,
            secondNameVazio: false,
            emailVazio: false,
            passwordVazio: false
        }
        this.saveUser = this.saveUser.bind(this);
    }
    //salva o usuario no backend
    saveUser = (e) => {
        //TODO: obtem os dados do state e envia para o backend salvar os dados
        this.setState({ firstNameVazio: (this.state.firstName === "") });
        this.setState({ secondNameVazio: (this.state.lastName === "") });
        this.setState({ emailVazio: (this.state.email === "") });
        this.setState({ passwordVazio: (this.state.password === "") });
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
                        <Grid container spacing={2} >
                            <Grid container spacing={0.5} direction="column" alignItems="center" justifyContent="center">
                                <Grid item >
                                    <Avatar sx={{ bgcolor: pink[500] }}>
                                        <LockOutlinedIcon />
                                    </Avatar>
                                </Grid>
                                <Grid item >
                                    <h2>Sign Up</h2>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} direction="row">
                                <TextField
                                    label="First Name"
                                    required
                                    fullWidth
                                    helperText={this.state.firstNameVazio ? "Preencha o campo" : null} error={this.state.firstNameVazio}
                                    onChange={this.onChange}>

                                </TextField>
                            </Grid>
                            <Grid item xs={6} direction="row">
                                <TextField
                                    label="Last Name"
                                    required
                                    fullWidth
                                    helperText={this.state.secondNameVazio ? "Preencha o campo" : null} error={this.state.secondNameVazio}
                                    onChange={this.onChange}>

                                </TextField>

                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="E-mail Adress"
                                    required
                                    fullWidth
                                    helperText={this.state.emailVazio ? "Preencha o campo" : null} error={this.state.emailVazio}
                                    onChange={this.onChange}>

                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Password"
                                    type="password"
                                    required
                                    fullWidth
                                    helperText={this.state.emailVazio ? "Preencha o campo" : null} error={this.state.emailVazio}
                                    onChange={this.onChange}>

                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel control={<Checkbox />} label="I want to receive inspiration, marketing promotions and updates via email" />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" disableElevation fullWidth onClick={(e) => {
                                    this.saveUser(e)
                                }}>
                                    SIGN UP
                                </Button>
                            </Grid>
                            <Grid item xs={6}/>
                            <Grid item xs={6}>
                                <Link href="#">Already have an account? Sign In</Link>
                            </Grid>

                        </Grid>
                    </form>
                </div >
            </Container >
        );
    }
}
export default AddUserCardsComponent
