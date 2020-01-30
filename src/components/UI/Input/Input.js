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
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate) {
        inputClasses.push(classes.Invalid)
    }

    switch (props.elementType) {
        case('input'):
            return <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}/>;
        case('textarea'):
            return <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}/>;
        case('select'):
            return <select
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>{option.displayValue}</option>
                ))}
            </select>;
        default:
            return <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}/>;
    }
}

export default input;