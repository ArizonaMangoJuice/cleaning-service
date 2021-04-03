import React, { useReducer, useEffect } from 'react';
import CalculatorAdd from './CalculatorAdd';
import CalculatorExtras from './CalculatorExtras';
import CalculatorFrequency from './CalculatorFrequency';
import { initialState, reducer } from './CalculatorReducer';
import { useInView } from 'react-intersection-observer';

export const CalculatorContext = React.createContext(initialState);

export const Calculator = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const {ref, inView} = useInView({
        threshold: 0,
        delay: 1500
    });

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
        // this will need to be ref by the calculator components not the whole calculator
        <CalculatorContext.Provider value={{ ...state, dispatch: dispatch }}>
            <section ref={ref} className={`calculator-outer-container ${inView ? 'fade-in' : 'fade-out'}`}>
                {/* <p>{isVisible && 'yes im now visisble'}</p> */}
                <h1>Estimate How Much Your House Will Cost To Clean</h1>
                <div className='calculator-bar-container'>
                    <div className='calculator-bar' style={{ width: `${Math.floor(state.price / 6)}%` }}>
                        <p className=''>${state.price}</p>
                    </div>
                </div>
                <div className='calculator-bar-container'>
                    <CalculatorAdd />
                    <CalculatorFrequency />
                    <CalculatorExtras />
                </div>

            </section>
        </CalculatorContext.Provider>
    )
}

export default Calculator;