import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'
const Option = ({featur}) => {
    return (
        <div className='flex gap-5 items-center'>

        <CheckCircleIcon className="h-6 w-6 text-blue-500" /> 
        <p className='ml-2'>{featur}</p> 
        </div>
    );
};

export default Option;