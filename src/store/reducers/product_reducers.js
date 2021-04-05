import {
    GET_PRODUCTS,
    ADD_PRODUCT,
    DELETE_ITEM,
    EDIT_ITEM
} from '../types';
import produce from "immer";

const initialState = [];




export default function productReducer(state=initialState,action){
    switch(action.type){
        case GET_PRODUCTS:
            return { ...state, ...action.payload }
        case ADD_PRODUCT:
                return { ...state,
                    products: [...state.products,action.payload] 
                    
                    // ...action.payload 
                }
        case DELETE_ITEM:
                return {
                    ...state,
                    products: state.products.filter((item, index) => index !== action.payload)
                }
        case EDIT_ITEM:
            return produce(state, draftstate => {
                action.payload.profile.forEach((item,index) => {
                   console.log(item.name,action.payload.index)
                   
                //    draftstate[action.index].name = item.name

                      draftstate.products[index].name = item.name
                      draftstate.products[index].prices[0].price = item.price
                })
                
            });
            
        default:
            return state
    }
}