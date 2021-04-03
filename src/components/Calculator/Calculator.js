import React, { useReducer, useEffect } from 'react';
import CalculatorAdd from './CalculatorAdd';
import CalculatorExtras from './CalculatorExtras';
import CalculatorFrequency from './CalculatorFrequency';
import {initialState, reducer} from './CalculatorReducer';

export const CalculatorContext = React.createContext(initialState);

export const Calculator = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // this seems wrong, need to check if Im doing an anti pattern
    useEffect(() => {
        dispatch({
            type: 'UPDATE_PRICE'
        })
    }, [state.size, state.bathrooms, 
        state.weekly, state.biWeekly, state.oneTime, state.monthly,
        state.initialClean, state.deepClean,
        dispatch])

    return (
        <CalculatorContext.Provider value={{ ...state, dispatch: dispatch }}>
            <section className='calculator-outer-container'>
                <h1>Estimate How Much Your House     Will Cost To Clean</h1>
                <CalculatorAdd />
                <CalculatorFrequency />
                <CalculatorExtras />
            </section>
        </CalculatorContext.Provider>
    )
}

export default Calculator;