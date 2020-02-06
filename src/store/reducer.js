import * as actionTypes from './actions'

const initialState = {
    ingredients: {
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0,
        tomato: 0
    },
    totalPrice: 100,
};

const INGREDIENT_PRICES = {
    salad: 1.5,
    cheese: 2,
    meat: 6,
    bacon: 3,
    tomato: 0.7
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient]: state.ingredients[action.ingredient] + 1
                }

            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient]: state.ingredients[action.ingredient] - 1
                }
            };
        default:
            return state;
    }
};

export default reducer;