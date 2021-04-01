import React from 'react';

export default function Reason(){
    return (
        <div className='reasons'>
            <div className='reason'>
                <div className='image-container'>
                    <img alt='cleaning supplies icon' className='reason-image' src='https://dtweclean.wpengine.com/wp-content/uploads/2016/02/icon11.png' />
                </div>
                <p className='reason-text'>Global Locations</p>
            </div>
            <div className='reason reason-blue'>
                <div className='image-container  reason-blue-border'>
                    <img alt='cleaning supplies icon' className='reason-image' src='https://dtweclean.wpengine.com/wp-content/uploads/2016/02/icon12.png' />
                </div>
                <p className='reason-text reason-blue-text'>Anytime Support</p>
            </div>
            <div className='reason'>
                <div className='image-container reason-red-border'>
                    <img alt='cleaning supplies icon' className='reason-image' src='https://dtweclean.wpengine.com/wp-content/uploads/2016/02/icon13.png' />
                </div>
                <p className='reason-text reason-red-text'>Global Locations</p>
            </div>
            <div className='reason'>
                <div className='image-container reason-green-border'>
                    <img alt='cleaning supplies icon' className='reason-image' src='https://dtweclean.wpengine.com/wp-content/uploads/2016/02/icon14.png' />
                </div>
                <p className='reason-text reason-green-text'>Global Locations</p>
            </div>
        </div>
    )
}