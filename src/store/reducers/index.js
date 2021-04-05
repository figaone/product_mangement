import { combineReducers } from 'redux';
import products from './product_reducers';
import user from './user_reducers';

const appReducers = combineReducers({
    products,
    user
})

export default appReducers;