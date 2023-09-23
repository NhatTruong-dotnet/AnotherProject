
import React, { useReducer } from "react";
import { IProps } from "../IProps";
import { inputReducer } from "../../reducer/form-reducer";
import { ActionTypes } from "../../action-types";

export const Input:React.FC<IProps> = (props) => {
    const [inputState, dispatch] = useReducer(inputReducer, { value: '' });
    
    const onChangeHandler = (event: any) => {
        dispatch({ type: ActionTypes.INPUT_CHANGE, val: event.target.value });
        props.onInput(event.target.name, event.target.value)
    }

    return <div>
        <label htmlFor={props.name}> {props.label}</label>
        <input name={props.name} type={props.type}
            placeholder={props.placeholder} value={inputState.value} onChange={onChangeHandler}
        />
    </div>;

}