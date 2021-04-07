import React, {useEffect, useReducer} from 'react';
import { initialState, reducer } from './quoteFormReducer';

// use Reducer
export const QuoteCotext = React.createContext(initialState)

export const QuoteForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {email, firstName, lastName, phoneNumber} = state;

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
                    <section>
                        <input
                             onInput={(e) => dispatch({type: 'EDIT_FIRST_NAME', payload: e.target.value})}
                             value={firstName}  placeholder='First Name' type='text' />
                        <input v
                            onInput={(e) => dispatch({type: 'EDIT_LAST_NAME', payload: e.target.value})}
                            alue={lastName} placeholder='Last Name' type='text' />
                    </section>
                    {/* /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im */}
                    <input 
                        onChange={(e) => {
                            let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
                            let isPhoneNumber = regex.test(e.target.value);
                            if(!isPhoneNumber){
                                dispatch({type: 'ERROR', payload: 'Not Valid Phone Number'})
                            }
                            dispatch({type: 'EDIT_PHONE_NUMBER', payload: e.target.value})
                        }}
                        value={phoneNumber} placeholder='Phone Number' className='quote-form-email' type='tel' />
                    <input value={email} placeholder='Email' className='quote-form-email' type='email' />
                    <button className='quote-form-button'>Request Quote</button>
                </form>
            </section>
        </section>
    )
}

export default QuoteForm;