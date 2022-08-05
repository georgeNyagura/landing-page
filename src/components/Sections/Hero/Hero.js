import React from 'react';

import hero_illustration from '../../../assets/hero_illustration.svg';
// import Button from '../../Atoms/Button';

const Hero = () => {
    return (
        <div className="w-full flex items-center px-20 justify-center">
            <LeftSection />
            <RightSection />
        </div>
    )
}

const LeftSection = () => (
    <span className="flex w-1/2 mt-20 items-center justify-end">
        <span className="flex flex-col space-y-5 items-start justify-center">
            <h1 className="text-blue font-semibold w-4/5 text-4xl">
                Request custom software for your business with <span className="font-extrabold">JSS</span>.
            </h1>
            <span className="text-blue-light w-3/4 text-sm">
                We will schedule a meeting, so that we can determine an optimum solution for your small business.
            </span>
            {/* <Button>Get Started</Button> */}
        </span>
    </span>
)

const RightSection = () => (
    <span className="flex w-1/2 mt-20 flex-col items-start justify-center">
        <img src={hero_illustration} width="511px" height="300px" alt="hero_illustration" />
    </span>
)

export default Hero;