import React from 'react'

const CustomInput: React.FC<{ type: string }> = ({ type }) => {
    return (
        <input
            className='transition-all bg-transparent border border-white rounded px-2 py-1 text-white focus:text-white focus:border-c-pink focus:drop-shadow-pink focus:outline-none'
            type={type}
            autoComplete='new-password'
        />
    )
}

export default CustomInput
