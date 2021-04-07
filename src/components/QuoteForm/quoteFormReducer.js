export const initialState = {
    email: '',
    phoneNumber: '',
    firstName: '',
    LastName: '',
    error: true,
    loading: false,
    emailSent: false,
};

export function reducer (state, action) {
    switch(action.type){
        case 'EDIT_FIRST_NAME': 
            return {...state, firstName: action.payload}
        case 'EDIT_LAST_NAME': 
            return {...state, lastName: action.payload}
        case 'EDIT_PHONE_NUMBER':
            return {...state, phoneNumber: action.payload}
        case 'QUOTE_FORM_ERROR': 
            return {...state, error: action.payload}
        case 'EDIT_EMAIL': 
            return {...state, email: action.payload}
        case 'SEND_EMAIL': 
            return {...state, emailSent: action.payload}
        default: throw new Error();
    }
}

