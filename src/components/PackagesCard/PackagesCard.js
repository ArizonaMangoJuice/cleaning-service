import React from 'react';
// import useOnScreen from '../Hooks/UseOnScreen';

export default function PackagesCard({ title, price, terms, desc, isDefault }) {
    // const packageCardRef = useRef();
    // const isVisible = useOnScreen(packageCardRef);
    // ref={packageCardRef}
    //  ${isVisible ? 'fade-top' : ''}
    return (
        <section  className={`package-card-container `}>
            <h3 className={`package-card-title ${isDefault ? 'package-default-title' : ''}`}>{title}</h3>
            <p className={`package-card-price ${isDefault ? 'package-default-price' : ''}`}>${price}.00</p>
            <span className='package-card-terms'>{terms}</span>
            <p className='package-card-desc'>{desc}</p>
            <a href='google.com' className={`package-card-button ${isDefault ? 'package-default-button' : ''}`}>BUY SERVICE</a>
        </section>
    )
}