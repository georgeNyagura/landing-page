import React from 'react'

const Button = ({props, children}) => (
    <button {...props} className="transition-all hover:bg-red-light font-semibold text-white px-12 py-2 text-sm tracking-wider rounded-xl bg-red">
        {children}
    </button>
)

export default Button
