export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

export const saveIngredient = (ingredient) => {
    return {
        type: ADD_INGREDIENT,
        ingredient: ingredient
    }
};

export const addIngredient = (ingredient) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveIngredient(ingredient))
        }, 2000);
    };
};

export const removeIngredient = (ingredient) => {
    return {
        type: REMOVE_INGREDIENT,
        ingredient: ingredient
    }
};