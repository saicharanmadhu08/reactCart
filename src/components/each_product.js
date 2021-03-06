import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/index';
class EachProductView extends Component {

    constructor(props) {
        super(props);
        this.state = { showProduct: true };
    }

    closeView() {
        this.setState({ showProduct: false });
    }

    addToCart(product){
        this.props.addToCart(product)
    }

    render() {
        const { product } = this.props;
        if (!product) {
            return <div></div>
        }

        return (
            <div id="eachProduct">
                <div id="closeView" onClick={this.closeView.bind(this)}>&times;</div>
                <h3>{product.productName}</h3>
                <img src={product.imageUrl} height="350" width="400" />
                <p>{product.description}</p>
                <p><b>Price :${product.price}</b> |<span><b>Rating :{product.starRating}</b></span></p>
                <button id="addToCart" onClick={() => {this.addToCart(product)}} className="btn btn-primary">Add To Cart</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { product: state.products.product }
}
export default connect(mapStateToProps, {addToCart})(EachProductView);