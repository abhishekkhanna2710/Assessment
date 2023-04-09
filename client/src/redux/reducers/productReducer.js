import { ActionTypes } from "../constants/action_types";

const initialState = {
    products: [{
        id: 1,
        title: "Jamn",
        category: "FoodItems"
    }]
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}