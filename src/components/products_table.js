import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../actions/index';
import { eachProduct } from '../actions/index';

class ProductsTable extends Component{

    componentDidMount(){
        this.props.getProducts();
    }

   viewEach(product){
       this.props.eachProduct(product);
   }

    renderTable(){
        return this.props.products.map((product) => {
            return(
                <tr key={product.productId} onClick = {() => {this.viewEach(product)}}>
                    <td>{product.productId}</td>
                    <td>{product.productName}</td>
                    <td>
                        <img src={product.imageUrl} width="30" height="25"/> 
                    </td>
                </tr>
            );
        });
    }

    render(){
        return(
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state){
   return {products : state.products.all}
}
export default connect(mapStateToProps, {getProducts, eachProduct})(ProductsTable);