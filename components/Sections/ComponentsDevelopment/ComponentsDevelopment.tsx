import React from 'react';
import {ComponentsData} from "../../Common/ComponentsCard/data";
import {ComponentsCard} from "../../Common/ComponentsCard/ComponentsCard";

export const ComponentsDevelopment = () => {
    return (
        <div className='my-12 md:my-20'>
            <h2 className='text-xl font-semibold mb-4 uppercase'>Custom UI Component Development</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {ComponentsData.map(item => <ComponentsCard key={item.id} item={item}/>)}
                <div className='hidden md:block h-3/4 p-3 rounded-2xl border border-gray-300 bg-gray-50 text-gray-500'>
                    <h3 className='text-xl font-light mb-3'>And other</h3>
                    <p className='text-sm'>We can create these and other components for you, all designed to suit your
                        unique style and needs</p>
                </div>
            </div>
            <div className='block md:hidden p-3 rounded-2xl border border-gray-300 bg-gray-50 text-gray-500'>
                <h3 className='text-xl font-light mb-3'>And other</h3>
                <p className='text-sm'>We can create these and other components for you, all designed to suit your
                    unique style and needs</p>
            </div>
        </div>
    );
};

