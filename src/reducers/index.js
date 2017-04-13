import { combineReducers } from 'redux';
import ProductsReducers from './reducers_products';

const rootReducer = combineReducers({
  products : ProductsReducers
});

export default rootReducer;
