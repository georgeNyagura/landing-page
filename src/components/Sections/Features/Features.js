import React from 'react';

import features_illustration from '../../assets/features_illustration.svg';
import { CheckedIcon } from '../icons/Icons';

import { features } from '../../data';

const Features = () => {
    return (
        <div className="flex items-center justify-around px-20 mt-14">
            <LeftSection />
            <RightSection />
        </div>
    )
}

const LeftSection = () => (
    <span>
        <img src={features_illustration} alt="features_illustration" />
    </span>
)

const RightSection = () => (
    <span className="flex flex-col w-1/3 space-y-5">
        <span className="w-2/3 text-2xl font-bold text-blue">
            {features.heading}
        </span>
        <span className="text-blue-light">
            {features.detail}
        </span>
        <FeaturesList />
    </span>
)

const FeaturesList = () => (
    <span className="flex flex-col justify-center space-y-4 text-blue-light">
        {   features.features.map(feature=><Feature text={feature}/>)  }
    </span>
)

const Feature = ({text}) => (
    <span className="flex items-center space-x-2">
        <span><CheckedIcon /></span>
        <span>{text}</span>
    </span>
)

export default Features;