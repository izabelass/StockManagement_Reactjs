

const PRODUCTS = '_PRODUCTS'

export function ValidationError(errors){
    this.errors = errors;
}

export default class ProductService {

    
    validate = (product) => {
        const errors = []

        if(!product.product_name){
            errors.push('O campo Nome é obrigatório.')
        }

        if(!product.id){
            errors.push('O campo ID é obrigatório.')
        }

        if(!product.price || product.price <= 0){
            errors.push('O campo Preço deve conter um valor maior que 0(zero).')
        }

        if(!product.qty || product.qty < 0){
            errors.push('O campo Quantidade deve conter um valor maior ou igual à 0(zero).')
        }

        if(!product.provider){
            errors.push('O campo Fornecedor é obrigatório.')
        }

        if(errors.length > 0){
            throw new ValidationError(errors)
        }
    }

    getProduct = () => {
        const products = localStorage.getItem(PRODUCTS)
        return JSON.parse(products)
    }
    
    save = (product) => {
        this.validate(product)

        let products = localStorage.getItem(PRODUCTS)

        if(!products){
            products = []
        }else{
            products = JSON.parse(products)
        }

        products.push(product);

        localStorage.setItem(PRODUCTS, JSON.stringify(products))
    }
}