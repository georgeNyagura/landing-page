import React from 'react';

import {network} from '../../../data';
import GlobalMap from '../../../assets/GlobalMap.png';
import sponsors from '../../../assets/sponsors.png';

const Network = () => {
    return (
        <div className="w-full pt-10 pb-20 space-y-3 col-center bg-grey-dark">
            <span className="text-3xl font-bold text-blue">
                {network.heading}
            </span>
            <span className="w-1/3 text-center text-blue-light">
                {network.detail}
            </span>
            <span className="pt-20">
                <img src={GlobalMap} alt="map" />
            </span>
            <span>
                <img src={sponsors} alt="sponsors" />
            </span>
        </div>
    )
}

export default Network;