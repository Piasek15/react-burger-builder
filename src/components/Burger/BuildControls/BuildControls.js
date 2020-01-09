import React from "react";
import PropTypes from 'prop-types'

import classes from './BuildControls.module.css'
import BuildControl from "./BuildControl/BuildControl";

const constrols = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong> zł</p>
        {constrols.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                />
        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}
        >Order Now</button>
    </div>
);

buildControls.propTypes = {
    ingredientAdded: PropTypes.func.isRequired,
    ingredientRemoved: PropTypes.func.isRequired,
    disabled: PropTypes.object.isRequired,
    purchasable: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    ordered: PropTypes.func.isRequired
};

export default buildControls;