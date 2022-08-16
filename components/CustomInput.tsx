import React from 'react'

const CustomInput: React.FC<{
    type: string
    value: string
    change: (e: React.ChangeEvent<HTMLInputElement>) => void
    name: string
}> = ({ type, value, change, name }) => {
    return (
        <input
            className='transition-all bg-transparent border border-white rounded px-2 py-1 text-white focus:text-white focus:border-c-pink focus:drop-shadow-pink focus:outline-none'
            type={type}
            autoComplete='new-password'
            value={value}
            onChange={(e) => change(e)}
            name={name}
            required
        />
    )
}

export default CustomInput
