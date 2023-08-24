import React, { useReducer, useState } from 'react'
import { IProps } from '../IProps'
import { selectReducer } from '../../reducer/form-reducer';

export default function Select(props: IProps) {
    const [data] = useState(props.data);

    let options = data.map((item: any, index: number) => (
        <option key={index} value={item}>{item}</option>
    ));

    const [inputState, dispatch] = useReducer(selectReducer, { value: '' });
    
    const onChangeHandler = (event: any) => {
        dispatch({ type: 'CHANGE', val: event.target.value });
        props.onSelectChange(event.target.name, event.target.value)
    }

    return (
        <div>
            <label htmlFor={props.name}> {props.label}</label>
            <select
                name={props.name}
                onChange={onChangeHandler}
                //style={selectStyle}
                value={inputState.value}
            >
                {options}
            </select>
        </div>

    );
}
