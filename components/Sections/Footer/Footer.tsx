import React from 'react';

export const Footer = () => {
    return (
        <div id="contact" className='my-16'>
            <h2 className='text-xl font-semibold uppercase'>get in touch</h2>
            <p className='my-4'>Feel free to contact me in the way that suits you best</p>
            <div className='grid md:grid-cols-4 gap-4'>
                <a href="https://wa.me/+996702324322" target="_blank" rel="noopener">
                    <div className='md:max-w-[282px] p-4 rounded-2xl border border-green-300 bg-white shadow-lg'>
                        <h3 className='text-xl font-light mb-3'>WhatsApp</h3>
                        <p className='text-sm'>+996 702 324 322</p>
                    </div>
                </a>
                <a href="https://t.me/adiletberdibekov" target="_blank" rel="noopener">
                    <div className='md:max-w-[282px] p-4 rounded-2xl border border-blue-400 bg-white shadow-lg'>
                        <h3 className='text-xl font-light mb-3'>Telegram</h3>
                        <p className='text-sm'>@adiletberdibekov</p>
                    </div>
                </a>
                <a href="https://m.me/adilet.million" target="_blank" rel="noopener">
                    <div className='md:max-w-[282px] p-4 rounded-2xl border border-blue-300 bg-white shadow-lg'>
                        <h3 className='text-xl font-light mb-3'>Facebook Messenger</h3>
                        <p className='text-sm'>@adilet.million</p>
                    </div>
                </a>
                <a href="mailto:berdibekovadilet@gmail.com" target="_blank" rel="noopener">
                    <div className='md:max-w-[282px] p-4 rounded-2xl border border-red-300 bg-white shadow-lg'>
                        <h3 className='text-xl font-light mb-3'>Email</h3>
                        <p className='text-sm'>berdibekovadilet@gmail.com</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

