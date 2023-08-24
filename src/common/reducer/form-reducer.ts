export const formReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            return {
                ...state, 
                inputs: { 
                    ...state.inputs, 
                    [action.inputId]: { value: action.value } 
                }
            };
        default:
            return state
    }
}

export const inputReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'CHANGE':
            return { ...state, value: action.val };
        default:
            return state;
    }
}

export const selectReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'CHANGE':
            return { ...state, value: action.val };
        default:
            return state;
    }
}

export const buttonReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'CHANGE':
            return { ...state, value: action.val };
        default:
            return state;
    }
}
