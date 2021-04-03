import React from 'react';
import PackagesCard from '../PackagesCard/PackagesCard';
export default function Packages() {
    return (
        <section className='packages'>
            <h2 className='packages-title'>Our Packages</h2>
            <p className='packages-desc'>
                Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. <br />
                Donec nec justo eget felis facilisis fermentum
            </p>
            <section className='packages-cards-container'>
                <section className='max-width packages-cards-max-width-container'>
                    <PackagesCard
                        title={'SINGLE VISIT'}
                        price={'209'}
                        terms={'One Time Visit. Extra charges may apply.'}
                        desc={'Per Visit, if its not first visit $149'}
                    />
                    <PackagesCard
                        isDefault={true}
                        title={'Most Popular'}
                        price={'117'}
                        terms={'Weekly. Extra charges may apply.'}
                        desc={'Starting at $117. First cleaning will be $184.'}
                    />
                    <PackagesCard
                        title={'BI WEEKLY'}
                        price={'121'}
                        terms={'Bi weekly. Extra charges may apply.'}
                        desc={'Starting at $121. First cleaning will be $188.'}
                    />
                    <PackagesCard
                        title={'Monthly'}
                        price={'134'}
                        terms={'Monthly. Extra Charges may apply.'}
                        desc={'Starting at $121. First cleaning will be $201.'}
                    />
                </section>
            </section>

        </section>
    )
}

