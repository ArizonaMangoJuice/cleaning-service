export const initialState = {
    email: '',
    phoneNumber: '',
    firstName: '',
    LastName: '',
    error: null,
    loading: false
};

export function reducer (state, action) {
    switch(action.type){
        case 'EDIT_FIRST_NAME': 
            return {...state, firstName: action.payload}
        case 'EDIT_LAST_NAME': 
            return {...state, lastName: action.payload}
        case 'EDIT_PHONE_NUMBER':
            return {...state, phoneNumber: action.payload}
        default: throw new Error();
    }
}

