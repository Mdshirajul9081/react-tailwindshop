import React from 'react';
import Option from '../Option/Option';

const PriceOption = ({price}) => {
    const {features}=price;
    return (
        <div className='bg-purple-400 m-3 p-3 rounded-2xl' >
           <div>
           <p>
                    <span className='text-6xl font-bold text-white'>{price.price}</span>
                    <span className='font-bold text-2xl text-gray-300'>/mon</span>
                    </p>
             <p className='text-2xl text-bold mt-3'>{price.name}</p>
           </div>
           {
            features.map((featur,idx)=><Option key={idx} featur={featur}></Option>)
           }
        </div>
    );
};

export default PriceOption;