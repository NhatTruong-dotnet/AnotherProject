import { useCallback, useReducer } from "react";
import { formReducer } from "../reducer/form-reducer";

export const useForm = (initialInput:any) => {
    const [formState, dispatch] = useReducer(formReducer, {inputs: initialInput });
    
    const inputHandler = (id:any, value:any) => {
        dispatch(
      {type: 'INPUT_CHANGE', value: value, inputId: id})
    }

    const setFormData = useCallback((inputData:any) => {
        dispatch(
            {type: 'SET_DATA', inputs: inputData})
    }, [])
    return [formState, inputHandler,setFormData];
}