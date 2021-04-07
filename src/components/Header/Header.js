import React from 'react';
import Logo from '../../images/logo.svg';

export default function Header() {
    return (
        <header>
            <div className='logo'>
                <img className='logo-image' src={Logo} alt='cleaning service' />
            </div>
            <div className='header-nav'>
                <a href='tel:+7205557555'>720-555-5555</a>
                <a href='mailto: support@gmail.com'>support@gmail.com</a>
                <a href='tel:+7205557555'>Have Questions?</a>
            </div>
            {/* this will be used for later  */}
            {/* <nav className='header-nav'>
                <div className='header-links-container'>
                    <a href='www.google.com' className='link-decoration'>Home</a>
                </div>
                <div className='header-links-container ' tabIndex='0'>
                    <a href='www.google.com' className='link-decoration'>Shop</a>
                    <div className='shop' >
                        <a href='www.google.com' className='link-decoration'>Shop</a>    <a href='www.google.com' className='link-decoration'>Shop</a>    <a href='www.google.com' className='link-decoration'>Shop</a>    <a href='www.google.com' className='link-decoration'>Shop</a>    <a href='www.google.com' className='link-decoration'>Shop</a>
                    </div>
                </div>
                <div className='header-links-container'>
                    <a href='www.google.com' className='link-decoration'>About</a>
                </div>
                <div className='header-links-container'>
                    <a href='www.google.com' className='link-decoration'>Content</a>
                </div>
            </nav> */}
        </header>
    )
}