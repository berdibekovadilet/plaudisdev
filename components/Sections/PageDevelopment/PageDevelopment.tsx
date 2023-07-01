import React from 'react';
import {PageCard} from "../../Common/PageCard/PageCard";
import {PageCases} from "../../Common/PageCard/data";

export const PageDevelopment = () => {
    return (
        <div className='my-16 md:my-20'>
            <h2 className='text-xl font-semibold mb-4 uppercase'>Page Custom Development</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                {PageCases.map(item => <PageCard key={item.id} item={item}/>)}
            </div>
        </div>
    );
};

