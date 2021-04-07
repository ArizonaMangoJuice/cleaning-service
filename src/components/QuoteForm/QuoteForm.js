import React, {useEffect, useReducer} from 'react';
import { initialState, reducer } from './quoteFormReducer';

// use Reducer
export const QuoteCotext = React.createContext(initialState)

export const stringErrorValidation = (dispatch, obj) => {
    const {string, error, type} = obj;
    if(string === '') {
        console.log('its empty')
        return dispatch({type, payload: error})
    };
    if(string.length !== 0 || string.length !== 0) return dispatch({type, payload: null});
}

// move validation function to seperate functions

export const QuoteForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {email, firstName, lastName, phoneNumber, error} = state;

    useEffect(() => {
        // console.log(state);
    }, [state])

    return (
        <section className={`quote-form-container `}>
            <section className={`max-width inner-quote-container`}>
                <section className='quote-form-image-section'>
                    <img alt='woman is smiling and cleaning' className='quote-form-image-section-img' src='https://cdn.pixabay.com/photo/2016/09/01/15/19/industrial-1636397_960_720.jpg' />
                </section>
                <form>
                    <section className='quote-form-error'>
                        <label className='quote-form-error-label'>{error}</label>
                    </section>
                    <section>
                        <input
                             onChange={(e) => {
                                let trimmed = e.target.value.trim();
                                let object = {type: 'QUOTE_FORM_ERROR', error: 'First Name Can\'t Be Empty', string: trimmed}; 
                                stringErrorValidation(dispatch, object);
                                dispatch({type: 'EDIT_FIRST_NAME',  payload: trimmed});
                             }}
                             value={firstName}  placeholder='First Name' type='text' />
                        <input 
                            onChange={(e) => {
                                let trimmed = e.target.value.trim(); 
                                let object = {type: 'QUOTE_FORM_ERROR', error: 'Last Name Can\'t Be Empty', string: trimmed}; 
                                stringErrorValidation(dispatch, object);
                                dispatch({type: 'EDIT_LAST_NAME', payload: trimmed})
                            }}
                            value={lastName} placeholder='Last Name' type='text' />
                    </section>
                    {/* /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im  for phone number */}
                    <input 
                        onChange={(e) => {
                            let regex = /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im;
                            let isPhoneNumber = regex.test(e.target.value);
                            if(!isPhoneNumber) dispatch({type: 'QUOTE_FORM_ERROR', payload: 'Not Valid Phone Number'})
                            if(isPhoneNumber) dispatch({type: 'QUOTE_FORM_ERROR', payload: null})
                            dispatch({type: 'EDIT_PHONE_NUMBER', payload: e.target.value})
                        }}
                        value={phoneNumber} placeholder='Phone Number' className='quote-form-email' type='text' />
                    {/* ^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$ */}
                    <input
                        onChange={e => {
                            // eslint-disable-next-line
                            let regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
                            let isEmail = regex.test(e.target.value);
                            if(!isEmail) dispatch({type: 'QUOTE_FORM_ERROR', payload: 'Not Valid Email'})
                            if(isEmail) dispatch({type: 'QUOTE_FORM_ERROR', payload: null})
                            dispatch({type: 'EDIT_EMAIL', payload: e.target.value})
                        }}
                        value={email} placeholder='Email' className='quote-form-email' type='email' />
                    <button 
                        disabled={error} className='quote-form-button'
                        onClick={(e) => {
                            e.preventDefault();
                            if(firstName.length === 0) return;
                            if(lastName.length === 0) return;
                            if(email.length === 0) return;
                            if(phoneNumber.length === 0) return;
                        }}    
                    >Request Quote</button>
                </form>
            </section>
        </section>
    )
}

export default QuoteForm;