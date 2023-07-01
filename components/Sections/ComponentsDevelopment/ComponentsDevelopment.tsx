import React from 'react';
import {ComponentsData} from "../../Common/ComponentsCard/data";
import {ComponentsCard} from "../../Common/ComponentsCard/ComponentsCard";

export const ComponentsDevelopment = () => {
    return (
        <div className='my-12 md:my-20'>
            <h2 className='text-xl font-semibold mb-8 uppercase'>Custom UI Component Development</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {ComponentsData.map(item => <ComponentsCard key={item.id} item={item}/>)}
            </div>
        </div>
    );
};

