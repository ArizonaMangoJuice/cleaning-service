import React from 'react';

export default function Header() {
    return (
        <header>
            <div className='logo'>
                <img src='https://dtweclean.wpengine.com/wp-content/themes/cleaning/images/logo.png' alt='cleaning service' />
            </div>
            <nav className='header-nav'>
                <div className='header-links-container'>
                    <a className='test'>Home</a>
                </div>
                <div className='header-links-container '>
                    <a className='test'>Shop</a>
                    <div className='shop'>
                        <a href='www.google.com' className='test'>Shop</a>    <a href='www.google.com' className='test'>Shop</a>    <a href='www.google.com' className='test'>Shop</a>    <a href='www.google.com' className='test'>Shop</a>    <a href='www.google.com' className='test'>Shop</a>
                    </div>
                </div>
                <div className='header-links-container'>
                    <a href='www.google.com' className='test'>About</a>
                </div>
                <div className='header-links-container'>
                    <a className='test'>Content</a>
                </div>
            </nav>
        </header>
    )
}