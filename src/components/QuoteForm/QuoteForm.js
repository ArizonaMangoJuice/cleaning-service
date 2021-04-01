import React from 'react';

export default () => {
    return (
        <section className='quote-form-container'>
            <section className='max-width inner-quote-container'>
                <section className='quote-form-image-section'>
                    <img className='quote-form-image-section-img' src='https://cdn.pixabay.com/photo/2016/09/01/15/19/industrial-1636397_960_720.jpg' />
                </section>
                <form>
                    <section>
                        <input placeholder='First Name' type='text' />
                        <input placeholder='Phone Number' type='text' />
                    </section>
                    <input placeholder='Email' className='quote-form-email' type='email'/>
                    <button className='quote-form-button'>Send Quote</button>
                </form>
            </section>
        </section>
    )
}