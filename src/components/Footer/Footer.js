import React from 'react';

export const Footer = () => {
    return (
        <footer>
            <div className='logo'>
                <img src='https://dtweclean.wpengine.com/wp-content/themes/cleaning/images/logo.png' alt='cleaning service' />
            </div>
            <nav className='footer-nav'>
                <div className='footer-links-container'>
                    <a href='www.google.com' className='link-decoration'>Home</a>
                </div>
                <div className='footer-links-container ' tabIndex='0'>
                    <a href='www.google.com' className='link-decoration'>Shop</a>
                    <div className='shop' >
                    </div>
                </div>
                <div className='footer-links-container'>
                    <a href='www.google.com' className='link-decoration'>About</a>
                </div>
                <div className='footer-links-container'>
                    <a href='www.google.com' className='link-decoration'>Content</a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer;