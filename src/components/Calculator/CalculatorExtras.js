import React, { useContext } from 'react';
import { CalculatorContext } from './Calculator';

export const CalculatorExtras = (props) => {
    const { dispatch, ...state } = useContext(CalculatorContext);

    return (
        <section className=''>
            <button style={state.initialClean ? {background: 'red'} : {}} onClick={() => dispatch({ type: 'INITIAL_CLEAN' })}>Initial Clean</button>
            <button onClick={() => dispatch({ type: 'DEEP_CLEAN' })}>Deep Clean</button>
            {/* <button onClick={() => dispatch({ type: 'BI_WEEKLY' })}>Every 2 Weeks</button> */}
        </section>
    )
}

export default CalculatorExtras;