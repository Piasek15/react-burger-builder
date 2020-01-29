import React from "react";
import classes from './Input.module.css'

const input = (props) => {
    const inputElement = getInputByType(props);

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
};

function getInputByType(props) {
    switch (props.inputType) {
        case('input'):
            return <input className={classes.InputElement} {...props}/>;
        case('textarea'):
            return <textarea className={classes.InputElement} {...props}/>;
        default:
            return <input className={classes.InputElement} {...props}/>;
    }
}

export default input;