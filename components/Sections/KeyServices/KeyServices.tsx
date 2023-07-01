import React from 'react';
import {keyServicesData} from "./data";
import {TextCard} from "../../Common/TextCard/TextCard";


export const KeyServices = () => {
    return (
        <div className='my-6 md:my-16'>
            <h2 className='text-xl font-semibold mb-8 uppercase'>Our Key Services</h2>
            <div className="flex gap-[16px] md:flex-row flex-col justify-between">
                {keyServicesData.map(service => <TextCard isHighlighted={service.id === 2} key={service.id} service={service}/>)}
            </div>
        </div>
    );
};

