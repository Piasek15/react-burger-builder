import * as actionTypes from '../actions/actionTypes'
import updateObject from "../utility";

const initialState = {
    ingredients: null,
    totalPrice: 100,
    error: false,
    building: false
};

const INGREDIENT_PRICES = {
    salad: 1.5,
    cheese: 2,
    meat: 6,
    bacon: 3,
    tomato: 0.7
};

const burgerBuilder = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS:
            return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return fetchIngredientsFailed(state);
        default:
            return state;
    }
};

const addIngredient = (state, action) => {
    const updatedIngredients = updateObject(state.ingredients, {[action.ingredient]: state.ingredients[action.ingredient] + 1});
    return updateObject(state, {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredient],
        building: true
    });
};

const removeIngredient = (state, action) => {
    return updateObject(state, {
        ingredients: {
            ...state.ingredients,
            [action.ingredient]: state.ingredients[action.ingredient] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredient],
        building: true
    });
};

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
            tomato: action.ingredients.tomato,
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat,
        },
        totalPrice: initialState.totalPrice,
        error: false,
        building: false
    });
};

const fetchIngredientsFailed = (state) => {
    return updateObject(state, {
        error: true
    });
};

export default burgerBuilder;