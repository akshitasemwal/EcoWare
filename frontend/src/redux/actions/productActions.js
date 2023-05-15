import { ActionTypes } from "../constants/action-types"

export const setProducts = (products) => {
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload : products
    };
};

export const setFilterProducts = (payload) =>{
        return {
            type : ActionTypes.SET_FILTER_PRODUCTS,
            payload,
        }
}

// export const selectedProducts = (product) => {
//     return {
//         type : ActionTypes.SELECTED_PRODUCT,
//         payload : product
//     };
// };
