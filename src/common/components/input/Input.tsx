
import React, { useReducer } from "react";
import { IProps } from "../IProps";
import { inputReducer } from "../../reducer/form-reducer";

export const Input = (props: IProps) => {
    const [inputState, dispatch] = useReducer(inputReducer, { value: '' });
    
    const onChangeHandler = (event: any) => {
        dispatch({ type: 'CHANGE', val: event.target.value });
        props.onInput(event.target.name, event.target.value)
    }

    return <div>
        <label htmlFor={props.name}> {props.label}</label>
        <input name={props.name} type={props.type}
            placeholder={props.placeholder} value={inputState.value} onChange={onChangeHandler}
        />
    </div>;

}