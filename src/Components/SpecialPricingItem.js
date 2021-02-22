import React from 'react';

function SpecialPricingItem(props) {
    return (
        <div className={`d-flex justify-content-between align-items-center py-4 ${props.padding}`} id='specialPricingItem'>
            <div>
                <h4 className='font-family-semi-bold'>{props.title}</h4>
                <div>{props.time} Minute Sessions</div>
            </div>
            <div>${props.price}</div>
        </div>
    );
}

export default SpecialPricingItem;