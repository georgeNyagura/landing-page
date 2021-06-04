import React from 'react'

const RoundedButton = ({props, children}) => (
    <button {...props} className="px-12 py-2 text-sm font-semibold tracking-wider text-white transition-all hover:bg-red-light rounded-3xl bg-red">
        {children}
    </button>
)

export default RoundedButton;
