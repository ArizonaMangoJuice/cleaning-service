import React, { useReducer, useEffect } from 'react';
import CalculatorAdd from './CalculatorAdd';
let initialState = {
    price: 102,
    size: 1,
    bathrooms: 1, 
    monthly: false,
    biWeekly: false,
    weekly: false,
    initialClean: true,
    deepClean: false,
}

export const CalculatorContext = React.createContext(initialState);

export function reducer(state, action){
    switch(action.type){
        case 'increment': 
            return {...state, price: state.price + 1};
        case 'UPDATE_PRICE':
            console.log('running Update Price')
            return {...state, price: 102 + (state.size * 25) + (state.bathrooms * 15)};
        case 'BATHROOMS': 
            return {...state, bathrooms: action.payload}
        case 'SIZE': 
            return {...state, size: action.payload}
        default:
            throw new Error();
    }
}


export const Calculator = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({
            type: 'UPDATE_PRICE'
        })
    }, [state.size, state.bathrooms, dispatch])

    return (
        <CalculatorContext.Provider value={{ ...state, dispatch: dispatch }}>
            <section className='calculator-outer-container'>
                <CalculatorAdd />
            </section>
        </CalculatorContext.Provider>
    )
}

export default Calculator;