import React, { useContext } from 'react';
import { CalculatorContext } from './Calculator';

export const CalculatorFrequency = (props) => {
    const { dispatch, ...state } = useContext(CalculatorContext);

    return (
        <section className=''>
            <button className={`calculator-button ${state.oneTime ? 'calculator-button-clicked' : ''}`} onClick={() => dispatch({ type: 'ONE_TIME_CLEANING' })}>One Time Cleaning</button>
            <button className={`calculator-button ${state.weekly ? 'calculator-button-clicked' : ''}`} onClick={() => dispatch({ type: 'WEEKLY' })}>Every Week</button>
            <button className={`calculator-button ${state.biWeekly ? 'calculator-button-clicked' : ''}`} onClick={() => dispatch({ type: 'BI_WEEKLY' })}>Every 2 Weeks</button>
            <button className={`calculator-button ${state.monthly ? 'calculator-button-clicked' : ''}`} onClick={() => dispatch({ type: 'MONTHLY' })}>Every 4 Weeks</button>
        </section>
    )
}

export default CalculatorFrequency;