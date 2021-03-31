import React from 'react';

export default function PackagesCard({title, price, terms, desc}) {
    return (
        <section className='package-card-container'>
            <h3 className='package-card-title'>{title}</h3>
            <p className='package-card-price'>${price}.00</p>
            <span className='package-card-terms'>{terms}</span>
            <p className='package-card-desc'>{desc}</p>
            <a href='google.com' className='package-card-button'>BUY SERVICE</a>
        </section>
    )
}