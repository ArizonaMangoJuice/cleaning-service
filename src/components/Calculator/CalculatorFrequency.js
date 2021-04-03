import React, { useContext } from 'react';
import { CalculatorContext } from './Calculator';

export const CalculatorFrequency = (props) => {
    const { dispatch } = useContext(CalculatorContext);

    return (
        <section className=''>
            <button onClick={() => dispatch({ type: 'ONE_TIME_CLEANING' })}>One Time Cleaning</button>
            <button onClick={() => dispatch({ type: 'WEEKLY' })}>Every Week</button>
            <button onClick={() => dispatch({ type: 'BI_WEEKLY' })}>Every 2 Weeks</button>
            <button onClick={() => dispatch({ type: 'MONTHLY' })}>Every 4 Weeks</button>
        </section>
    )
}

export default CalculatorFrequency;