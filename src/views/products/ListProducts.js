import React from 'react';

import { useNavigate } from "react-router";
import Table from "@material-ui/core/Table";
import { styled } from '@mui/material/styles';
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button, Paper } from "@material-ui/core";
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ProductService from '../../app/ProductService';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const withRouter = (useNavigate) => {
	const Wrapper = (props) => {
		const history = useNavigate();
		return <useNavigate history={history} {...props} />;
	};
	return Wrapper;
};



export class ListProducts extends React.Component {

    state = {
        products: []
    }

    constructor() {
        super()
        this.service = new ProductService();
    }

    componentDidMount() {
        const products = this.service.getProduct();
        this.setState({ products })
    }

    prepareEdit = (id) => {
        this.props.history.push(`/Cadastro/${id}`)
        console.log('id para editar: ' ,id);
    }


    render() {
        const { navigation } = this.props;

        return (
            <Paper className="container">
                <Grid item xs={12} md={12}>
                    <Item>CONSULTA PRODUTOS</Item>
                </Grid>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Id</TableCell>
                            <TableCell numeric>Preço</TableCell>
                            <TableCell numeric>Quantidade</TableCell>
                            <TableCell>Fornecedor</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.products.map((product, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{product.product_name}</TableCell>
                                    <TableCell>{product.id}</TableCell>
                                    <TableCell>R$ {product.price}</TableCell>
                                    <TableCell>{product.qty}
                                        <IconButton aria-label="edit" size="large">
                                            <AddCircleOutlineIcon fontSize="inherit" />
                                        </IconButton>
                                        <IconButton aria-label="edit" size="large">
                                            <RemoveCircleOutlineIcon fontSize="inherit" />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>{product.provider}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={ () => this.prepareEdit(product.id)} aria-label="edit" size="large">
                                            <EditIcon fontSize="inherit" />
                                        </IconButton>
                                        <IconButton aria-label="delete" size="large">
                                            <DeleteIcon fontSize="inherit" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            )
                        })}



                    </TableBody>
                </Table>
            </Paper>
        )
    }
}






