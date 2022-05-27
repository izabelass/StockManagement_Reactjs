import React from 'react';

import { useState, createRef } from 'react';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Button, Paper } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default class AddProduct extends React.Component {
    
    render(){
        return(
            <Paper className="container">
                <form onSubmit={/} ref={/}>
                    <Grid container alignItems="center" justify="center" direction="column">
                        <Grid item controlId="formBasicProductName">
                            <label>Nome do produto:</label>
                            <TextField fullWidth type="text" placeholder="Insira o nome do produto" name="product_name" required/>
                        </Grid>
                        <Grid item controlId="formBasicPrice">
                            <label>Preço:</label>
                            <TextField fullWidth type="number" placeholder="Preço em Reais" name="price" required/>
                        </Grid>
                        <Grid item controlId="formBasicQty">
                            <label>Quantidade:</label>
                            <TextField fullWidth type="number" placeholder="Quantidade" name="qty" required/>
                        </Grid>
                    
                        <Button className='main-btn' variant="contained" type="submit"> Adicionar ao Estoque</Button> 
                    </Grid>
                </form>
            </Paper>
        )
    }
}