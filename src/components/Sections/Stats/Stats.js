import React from 'react';

import { LocationIcon, ServerIcon, UserIcon } from '../../icons/Icons';

const Stats = () => {
    return (
        <div className="flex justify-center w-full mt-14">
            <span className="flex items-center w-5/6 px-20 shadow-xl justify-evenly rounded-2xl h-36">
                <Stat Icon={UserIcon} heading="5" text="Users" />
                <Divider />
                <Stat Icon={LocationIcon} heading="3" text="Locations" />
                <Divider />
                <Stat Icon={ServerIcon} heading="2" text="Wait Listed" />
            </span>
        </div>
    )
}

const Stat = ({ Icon, heading, text }) => (
    <span className="flex">
        <Icon />
        <span className="flex flex-col ml-8">
            <span className="text-2xl font-extrabold text-blue">{heading}</span>
            <span className="text-blue-light">{text}</span>
        </span>
    </span>
)

const Divider = () => (
    <span className="border text-grey-light h-14"></span>
)

export default Stats;