import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import InputAdornment from '@mui/material/InputAdornment';



class AddUserMaterialComponent extends Component {
    //definicao das props e state
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            nome: '',
            sexo: '',
            idade: '',
            Mensalidade: '',
            valueDate: null,
            nomeVazio: false,
            valueDateVazio: false,
            loginVazio: false
        }
        this.saveUser = this.saveUser.bind(this);
    }
    //salva o usuario no backend
    saveUser = (e) => {
        //TODO: obtem os dados do state e envia para o backend salvar os dados
        this.setState({ nomeVazio: (this.state.nome === "") });
        this.setState({ loginVazio: (this.state.login === "") });
        this.setState({ valueDateVazio: (this.state.valueDate === null) });
    }
    //modifica o valor do state do campo alterado
    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
    //renderiza o componente
    render() {
        return (
            <Container maxWidth="sm">
                <div>
                    <h2 className="text-center">Cadastro de Aluno</h2>
                    <form>
                        <Grid container spacing={2}>
                            {/*Nome */}
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    autoFocus
                                    fullWidth
                                    id="nome" name="nome" label="Nome" value={this.state.nome} onChange={this.onChange}
                                    helperText={this.state.nomeVazio ? "Preencha o campo" : null} error={this.state.nomeVazio}>
                                </TextField>
                            </Grid>

                            {/* Sexo */}
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <FormLabel id="sexoLabel">Sexo</FormLabel>
                                    <RadioGroup
                                        defaultValue="Feminino"
                                        name="sexoRadio"
                                        row
                                    >
                                        <FormControlLabel value="Masculino" control={<Radio />} label="Feminino" />
                                        <FormControlLabel value="Feminino" control={<Radio />} label="Masculino" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>


                            {/* Aniversário */}
                            <Grid item xs={12}>
                                <FormControl fullWidth required>
                                    <FormLabel id="Niver">Data de Aniversário</FormLabel>
                                    <TextField
                                        required
                                        type={"date"}
                                        id="Aniversario" name="Aniversario" value={this.state.valueDate}
                                        onChange={this.onChange}
                                        helperText={this.state.valueDateVazio ? "Preencha o campo" : null}
                                        error={this.state.valueDateVazio}>
                                    </TextField>
                                </FormControl>

                            </Grid>

                            {/* Valor da Mensalidade */}
                            <Grid item xs={12}>
                                <TextField
                                    type={"number"}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                                    }}
                                    id="ValueMensalidade" name="Mensalidade" label="Valor da Mensalidade" value={this.state.Mensalidade} onChange={this.onChange}>
                                </TextField>
                            </Grid>
                        </Grid>
                        <br></br>

                        {/* Curso */}
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <FormLabel id="sexoLabel">Curso</FormLabel>
                                <RadioGroup
                                    defaultValue="ADS"
                                    name="cursoRadio"
                                >
                                    <FormControlLabel value="CC" control={<Radio />} label="Ciência da Computação" />
                                    <FormControlLabel value="EC" control={<Radio />} label="Engenharia da Computação" />
                                    <FormControlLabel value="ADS" control={<Radio />} label="Analise e Desenvolvimento de Sistemas" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Button variant="contained" color="primary" disableElevation onClick={(e) => {
                            this.saveUser(e)
                        }}>
                            Salvar
                        </Button>
                    </form>
                </div>
            </Container >
        );
    }
}
export default AddUserMaterialComponent
