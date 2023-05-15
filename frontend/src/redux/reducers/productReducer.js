import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [],
    productsByCategory : [],
};

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload || []};
        case ActionTypes.SET_FILTER_PRODUCTS:
            return {...state, productsByCategory: payload ||  []};
        default:
            return state;
    }
};
