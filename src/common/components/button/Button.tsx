import React, { useReducer, useState } from 'react'
import { IProps } from '../IProps'
import { buttonReducer } from '../../reducer/form-reducer';
import { ActionTypes } from '../../action-types';

export default function Button(props: IProps) {

    const [inputState, dispatch] = useReducer(buttonReducer, { value: '' });

    const onClickHandler = (event: any) => {
        dispatch({ type: ActionTypes.BUTTON_CHANGE, val: event.target.value });
        props.onSelectChange()
    }
    const buttonStyle= {
        'border': '1px solid #ced4da', fontSize: '12px',padding: '5px'
    };
    return (
        <button className='btn-group' style={buttonStyle} name={props.name} onClick={onClickHandler}>{props.label}</button>
        
    );
}
