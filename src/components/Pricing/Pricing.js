import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const priceOption=[
        {id:1,name:'free',price:'13000',features:[
            'Awesome feature',
            'best feature',
            'Extra feature',
            'Unnessery feature',
            'will never us feature',
            'huday feature'
        ]},
        {id:2,name:'medium',price:'13000'
    , features:[
        'Awesome feature',
        'best feature',
        'Extra feature',
        'Unnessery feature',
        'will never us feature',
        'huday feature'
    ]},
        {id:3,name:'larger',price:'13000' ,features:[
            'Awesome feature',
            'best feature',
            'Extra feature',
            'Unnessery feature',
            'will never us feature',
            'huday feature'
        ]},
    ]
    return (
        <div>
            <h2 className='text-4xl bg-purple-600 p-12 text-white '>Best Deal of the Town</h2>
       
           <div className='grid md:grid-cols-3 gap-3' >
           {
                priceOption.map(price=><PriceOption key={price.id} price={price}></PriceOption>)
            }
           </div>
           </div>
       
    );
};

export default Pricing;