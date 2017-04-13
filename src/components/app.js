import React, { Component } from 'react';
import ProductsTable from './products_table';
import EachProductView from './each_product';
import Cart from './cart';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = { viewCart: false };
  }

  toggleCart() {
    this.setState({ viewCart: true });
  }
  render() {
    return (
      <div>
        <h1>Shopping Cart</h1>
        <div className="row">
          <div className="col-sm-3">
            <ProductsTable />
          </div>
          <div className="col-sm-7 verticalLine">
            <EachProductView />
          </div>
          <div className="col-sm-2 verticalLine">
            {this.state.viewCart ? <Cart /> : <button id="viewCart" onClick={this.toggleCart.bind(this)} className="btn btn-danger">View Cart</button>}

          </div>
        </div>

      </div>
    );
  }
}
