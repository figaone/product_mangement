import React, { useEffect } from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import MainLayout from './components/hoc/main_layout';

import Home from './components/home/index';
import Header from './components/header';
import Footer from './components/footer';
import AddProduct from './components/utils/add_product';
import EditProduct from './components/utils/edit_product';
import DeleteProduct from './components/utils/delete_product';
import { getProducts } from '../src/store/actions/index';

const Routes = () => {
    
    const dispatch = useDispatch();

    useEffect( ()=>{
        dispatch(getProducts())
      }, [dispatch])
    
    return(
    
    <BrowserRouter>
        <Header/>
         <MainLayout>
            <Switch>
                <Route path="/add_product" component={AddProduct}/>
                <Route path="/edit_product" component={EditProduct}/>
                <Route path="/delete_product" component={DeleteProduct}/>
                <Route path="/" component={Home}/>
            </Switch>
         </MainLayout>
         <Footer/>
    </BrowserRouter>
)
}

export default Routes;