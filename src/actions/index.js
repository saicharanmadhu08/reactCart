import axios from 'axios';

export function getProducts(){
    const request = axios.get("http://localhost:3000/productdetails");
    
    return {
        type : 'FETCH_PRODUCTS',
        payload : request
    }
}

export function eachProduct(product){

    const request = product;
    return {
        type : 'SHOW_PRODUCT',
        payload : request
    }
}