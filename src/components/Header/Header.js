import React from 'react';

export default function Header() {
    return (
        <header>
            <div className='logo'>
                <img src='https://dtweclean.wpengine.com/wp-content/themes/cleaning/images/logo.png' alt='cleaning service' />
            </div>
            <nav className='header-nav'>
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
            </nav>
        </header>
    )
}