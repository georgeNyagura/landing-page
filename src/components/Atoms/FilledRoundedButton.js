import React from 'react'

const FilledRoundedButton = ({props, children}) => (
    <button {...props} className="px-12 py-2 text-sm font-semibold tracking-wider transition-all bg-white ring-1 ring-red text-red hover:bg-red hover:text-white rounded-3xl">
        {children}
    </button>
)

export default FilledRoundedButton;
