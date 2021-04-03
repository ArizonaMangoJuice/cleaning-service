import React from 'react';
import firstSlide from '../../images/firstSlide.jpg';
import secondSlide from '../../images/secondSlide.jpg';
import thirdSlide from '../../images/thirdSlide.jpg';
import fourthSlide from '../../images/fourthSlide.jpg';

export default function Jumbotron() {
    return (
        <div className='slideshow-wrapper' tabIndex='0'>
            <div className='slideshow'>

                <div className='slideshow-image-container'>
                    <div className='content-background'></div>
                    <div className='slideshow-content'>
                        <h1 className='content-title'>Cleanliness Is Art</h1>
                        <p className='content-info'>We Pride ourselves in our work. We are one of the best and most consistent cleaners in Colorado.</p>
                    </div>
                    <img alt='People are cleaning and smelling' className='slideshow-image test' src={firstSlide} />
                </div>
                <div className='slideshow-image-container'>
                    <div className='content-background'></div>
                    <div className='slideshow-content'>
                        <h1 className='content-title'>Had A Crazy Party?</h1>
                        <p className='content-info'>Give us a call and we will fix you right up. Plus, the next time you have another awesome party it will be cheaper!</p>
                    </div>
                    <img alt='People are cleaning and smelling' className='slideshow-image' src={secondSlide} />
                </div>
                <div className='slideshow-image-container'>
                    <div className='content-background'></div>
                    <div className='slideshow-content'>
                        <h1 className='content-title'>We Clean Offices!</h1>
                        <p className='content-info'>Please call us so we can give a you a quote!</p>
                    </div>
                    <img alt='People are cleaning and smelling' className='slideshow-image' src={thirdSlide} />
                </div>
                <div className='slideshow-image-container'>
                    <div className='content-background'></div>
                    <div className='slideshow-content'>
                        <h1 className='content-title'>We clean Everything</h1>
                        <p className='content-info'>If you want us to do your bed or any other custom order. Call us and we will work with you, to leave you satisfied!</p>
                    </div>
                    <img alt='People are cleaning and smelling' className='slideshow-image' src={fourthSlide} />
                </div>

            </div>
        </div>
    )
}