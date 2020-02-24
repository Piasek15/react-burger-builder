import * as actionTypes from '../actions/actionTypes'
import updateObject from "../utility";

const initialState = {
    orders: [],
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_BURGER_START:
            return updateObject(state, {
                loading: true
            });
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            };

            return updateObject(state, {
                ...state,
                loading: false,
                orders: state.orders.concat(newOrder)
            });
        case actionTypes.PURCHASE_BURGER_FAIL:
            return updateObject(state, {
                loading: false
            });
        default:
            return state;

    }
};

export default reducer;