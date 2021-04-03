import React, { useContext } from 'react';
import { CalculatorContext } from './Calculator';

export const CalculatorAdd = (props) => {
    const { dispatch, ...state } = useContext(CalculatorContext);

    return (
        <div>
            <section className='select-container'>
                <select value={state.size} onChange={e => dispatch({ type: 'SIZE', payload: e.target.value })} className='calculator-square-feet'>
                    <option value='1' >less than 1200 sq ft</option>
                    <option value='2'>1200 to 1400 sq ft</option>
                    <option value='3'>1400 to 2000 sq ft</option>
                    <option value='4'>2000 to 2400 sq ft</option>
                    <option value='5'>2400 to 2800 sq ft</option>
                    <option value='6'>2800 to 3200 sq ft</option>
                    <option value='7'>3200 to 3600 sq ft</option>
                </select>
            </section>
            <section className='select-container'>
                <select value={state.bathrooms} onChange={e => dispatch({ type: 'BATHROOMS', payload: e.target.value })} className='calculator-square-feet'>
                    <option value='1' >1 Bathroom</option>
                    <option value='2'>2 Bathroom</option>
                    <option value='3'>3 Bathroom</option>
                    <option value='4'>4 Bathroom</option>
                    <option value='5'>5 Bathroom</option>
                    <option value='6'>6 Bathroom</option>
                </select>
            </section>
        </div>
    )
}

export default CalculatorAdd;