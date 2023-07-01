import React from 'react';
import Image from "next/image";
import Banner from "/public/banners/hero.png"

export const Hero = () => {
    return (
        <div className='md:flex justify-between gap-[50px] items-center my-6 md:my-12'>
            <div className="md:w-1/2">
                <h1 className='text-3xl leading-10 md:text-4xl md:leading-[52px] font-light'>Enhance
                    your <b>Shopify</b> store
                    with our professional front-end development services <span className='hidden md:inline'>✦ Secure an
                    impressive
                        and functional design that attracts and retains your customers </span>
                </h1>
                <div className='flex items-center gap-1.5 flex-wrap my-4 md:my-6'>
                    <p className='bg-black text-white py-1 px-4 rounded text-sm'>Shopify</p>
                    <p className='bg-black text-white py-1 px-4 rounded text-sm'>Liquid</p>
                    <p className='bg-black text-white py-1 px-4 rounded text-sm'>Hydrogen</p>
                    <p className='bg-black text-white py-1 px-4 rounded text-sm'>Remix</p>
                    <p className='bg-black text-white py-1 px-4 rounded text-sm'>Next</p>
                    <p className='bg-black text-white py-1 px-4 rounded text-sm'>Tailwind</p>
                </div>
            </div>
            <div className="md:w-1/2">
                <Image src={Banner} alt='Banner' width={500} height={500}/>
            </div>
        </div>
    );
};

