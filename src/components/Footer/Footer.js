import React from 'react';
import Logo from '../../images/logo.svg';

export const Footer = () => {
    return (
        <footer>
            <div className='logo'>
                <img src={Logo} alt='cleaning service' />
            </div>
            <p>Created By AMJ</p>
            {/* <nav className='footer-nav'>
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
            </nav> */}
        </footer>
    )
}

export default Footer;