import React from 'react';
import PackagesCard from '../PackagesCard/PackagesCard';

export default function Packages() {
    return (
        <section className='packages'>
            <h2 className='packages-title'>Our Packages</h2>
            <p className='packages-desc'>Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
Donec nec justo eget felis facilisis fermentum</p>
            <section className='packages-cards-container'>
                <section className='max-width packages-cards-max-width-container'>
                    <PackagesCard
                        title={'SINGLE VISIT'}
                        price={'50'}
                        terms={'Per Visit'}
                        desc={'Extra charges are based on extra work taken.'}
                    />
                    <PackagesCard
                        isDefault={true}
                        title={'ON DEMAND'}
                        price={'125'}
                        terms={'No. Of Visits'}
                        desc={'Extra charges are based on extra work taken.'}
                    />
                    <PackagesCard
                        title={'MAINTENANCE'}
                        price={'200'}
                        terms={'Per Month'}
                        desc={'Extra charges are based on extra work taken.'}
                    />
                    <PackagesCard
                        title={'COMPLETE PACK'}
                        price={'215'}
                        terms={'Per Month'}
                        desc={'Extra charges are based on extra work taken.'}
                    />
                </section>
            </section>

        </section>
    )
}

