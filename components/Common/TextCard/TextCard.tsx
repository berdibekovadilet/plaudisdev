import React from 'react';
import {KeyService} from "../../Sections/KeyServices/data";

interface KeyServiceProps {
    service: KeyService;
    isHighlighted: boolean;
}

export const TextCard: React.FC<KeyServiceProps> = ({service, isHighlighted}) => {
    return (
        <div className={`md:max-w-[282px] p-3 ${isHighlighted ? '' : 'rounded-lg border border-gray-300 bg-white'}`}>
            <h3 className='text-xl font-light mb-3'>{service.title}</h3>
            <p className='text-sm'>{service.description}</p>
        </div>
    );
};

