import React, { Component } from 'react';
import ProductsTable from './products_table';
import EachProductView from './each_product';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Shopping Cart</h1>
        <div className="row">
          <div className="col-sm-4">
            <ProductsTable />
          </div>
          <div className="col-sm-8 verticalLine">
            <EachProductView />
          </div>
        </div>
        
      </div>
    );
  }
}
