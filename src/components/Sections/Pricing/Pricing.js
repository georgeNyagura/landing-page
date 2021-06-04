import React from 'react';

import { pricing } from '../../data';

import pricing_illustration from '../../assets/pricing_illustration.svg';
import { CheckIcon } from '../icons/Icons';
import RoundedButton from '../Atoms/RoundedButton';
import FilledRoundedButton from '../Atoms/FilledRoundedButton';

const Pricing = () => {
    return (
        <div className="w-full pt-20 pb-20 space-y-3 col-center mt-14 bg-grey-dark">
            <span className="text-3xl font-bold text-blue">
                {pricing.heading}
            </span>
            <span className="w-1/3 text-center text-blue-light">
                {pricing.detail}
            </span>
            <span className="pt-7"><PricingSection /></span>
        </div>
    )
}

const PricingSection = () => {
    return (
        <span className="space-x-10 row-center">
            {
                pricing.plans.map(plan=><PricingCard plan={plan} />)
            }
        </span>
    )
}

const PricingCard = ({plan}) => {
    return (
        <span className={`${plan.prefer ? 'border-red' : 'border-grey-darkest'} flex flex-col items-center justify-start h-screen py-10 space-y-5 bg-white border-2 shadow-lg w-72 rounded-2xl`}>
            <span><img src={pricing_illustration} alt="pricing_illustration" /></span>
            <span className="text-lg font-bold text-blue">{plan.name}</span>
            <span className="h-72"><Features features={plan.features} /></span>
            <span className="flex flex-col items-center space-y-4">
                <Price price={plan.price}/>
                {
                    plan.prefer ?
                    <RoundedButton>{plan.ctaText}</RoundedButton>
                    :
                    <FilledRoundedButton>{plan.ctaText}</FilledRoundedButton>
                }
            </span>
        </span>
    )
}

const Price = ({ price }) => (
    <span className="space-x-1">
        <span className="text-xl font-semibold text-blue">{price.cost}</span>
        {
            price.subscription && <span>/</span>
        }
        <span className="text-blue-light">{price.subscription}</span>
    </span>
)

const Features = ({ features }) => {
    
    return (
        <span className="flex flex-col mt-8 space-y-4 text-blue-light">
            {
                features.map(feature=>(
                        <span className="flex items-center space-x-2">
                            <span><CheckIcon /></span>
                            <span>{feature}</span>
                        </span>
                ))
            }
        </span>
    )
}

export default Pricing
