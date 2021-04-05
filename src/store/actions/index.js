import axios from 'axios';

import {
    GET_PRODUCTS,
    ADD_PRODUCT,
    DELETE_ITEM,
    EDIT_ITEM
} from '../types'



export const getProducts = () =>{
    try{
        const request = axios.get(`http://www.mocky.io/v2/5c3e15e63500006e003e9795/products`)
                .then( response => {
            return response.data
        })
        return {
            type:GET_PRODUCTS,
            payload:request
        }    


    } catch(error){
        throw error
    }
    
}

// export const getProducts = () =>({
//     type: GET_PRODUCTS,
//     payload: api.getProducts()
// })

export const addProduct = (data) =>({
    type:ADD_PRODUCT,
    payload:data
})

export const deleteItem = (index) => ({
    type: DELETE_ITEM,
    payload: index
   
 })

 export const editItem = (data) => ({
    type: EDIT_ITEM,
    payload:data
   
 })