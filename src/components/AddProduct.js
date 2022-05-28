

import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from "@material-ui/core/TextField";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Paper } from "@material-ui/core";
import ProductService from '../app/productService';
import Alert from '@mui/material/Alert';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const initialValue = {
    product_name: '',
    sku: '',
    description: '',
    price: 0,
    provider: '',
    success_msg: false
}

class AddProduct extends React.Component {

    state = initialValue;

    constructor() {
        super()
        this.service = new ProductService();
    }

    onChange = (event) => {
        const inputValue = event.target.value
        const inputName = event.target.name
        this.setState({ [inputName]: inputValue })
    }

    onSubmit = (event) => {
        const product = {
            product_name: this.state.product_name,
            sku: this.state.sku,
            description: this.state.description,
            price: this.state.price,
            provider: this.state.provider
        }
        this.service.save(product)
        this.clearData();
        this.setState({ success_msg : true })
    }

    clearData = () => {
        this.setState(initialValue)
    }

    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <form >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Item>CADASTRO DE PRODUTOS</Item>
                        </Grid>
                        {   this.state.success_msg && (
                                <Grid item xs={12} md={12}>
                                <Alert onClose={() => { }}>Cadastro realizado com sucesso!</Alert>
                            </Grid>
                            )
                        }
                        
                        <Grid item xs={12} md={6} controlId="formBasicProductName">
                            <label>Nome: *</label>
                            <TextField fullWidth
                                type="text"
                                placeholder="Insira o nome do produto"
                                name="product_name" value={this.state.product_name}
                                onChange={this.onChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={6} controlId="formBasicSku">
                            <label>SKU: *</label>
                            <TextField fullWidth
                                type="text"
                                placeholder="Insira o código SKU do produto"
                                name="sku" value={this.state.sku}
                                onChange={this.onChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12} controlId="formBasicDescription">
                            <label>Descrição: </label>
                            <TextField fullWidth
                                type="text"
                                placeholder="Insira a descrição do produto"
                                name="description"
                                value={this.state.description}
                                onChange={this.onChange}
                            />

                        </Grid>
                        <Grid item xs={12} md={6} controlId="formBasicPrice">
                            <label>Preço: *</label>
                            <TextField fullWidth
                                type="text"
                                placeholder="Insira o preço do produto"
                                name="price" value={this.state.price}
                                onChange={this.onChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={6} controlId="formBasicProvider">
                            <label>Fornecedor: *</label>
                            <TextField fullWidth
                                type="text"
                                placeholder="Insira o fornecedor do produto"
                                name="provider"
                                value={this.state.provider}
                                onChange={this.onChange}
                                required
                            />
                        </Grid>
                        <Grid item>
                            <Button className='main-btn' variant="contained" type="submit" onClick={this.onSubmit}> Salvar</Button>
                            <Button className='main-btn' variant="contained" type="submit" onClick={this.clearData}> Limpar</Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        );
    }
}

export default AddProduct;