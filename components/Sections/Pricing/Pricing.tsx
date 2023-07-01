import React from 'react';

export const Pricing = () => {
    return (
        <div className='my-6 md:my-16'>
            <h2 className='text-xl font-semibold mb-4 uppercase'>Our Rates</h2>
            <div className='flex flex-col md:flex-row justify-between gap-4'>
                <div className='md:w-1/4 p-3 rounded-lg border border-gray-300 bg-white'>
                    <h3 className='text-lg font-light mb-3'>Standard Rate</h3>
                    <h4 className='text-4xl font-light'>$25/hr</h4>
                </div>
                <div className='md:w-1/4 p-3 rounded-lg border border-gray-300 bg-white'>
                    <h3 className='text-lg font-light mb-3'>Mid-Length Contract</h3>
                    <h4 className='text-4xl mb-4 font-light'>$22/hr</h4>
                    <p>contracts ranging from <b>one week</b> to one month</p>
                </div>
                <div className='md:w-2/4 px-6 py-3 rounded-lg border border-gray-300 bg-gradient text-white'>
                    <h3 className='text-lg font-light mb-3'>Long-Term Contract</h3>
                    <h4 className='text-4xl mb-4 font-light'>$17/hr</h4>
                    <p>contracts for <b>one month</b> and longer</p>
                </div>
            </div>
        </div>
    );
};

