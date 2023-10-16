import {  useReducer } from "react";
import { ActionTypes } from "../action-types";
import { modalReducer } from "../reducer/form-reducer";

export const useModal = (initialInput:any) => {
    const [modalState, dispatch] = useReducer(modalReducer, {show: initialInput });
    
    const openModal = () => {
        dispatch({type: ActionTypes.TOOGLE_MODAL})
    }

    const closeModal = () => {
        dispatch({type: ActionTypes.TOOGLE_MODAL})
    }
    return [modalState, openModal,closeModal];
}