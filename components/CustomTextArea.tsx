import React from 'react'

const CustomTextArea: React.FC<{
    numRows: number
    value: string
    change: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    name: string
}> = ({ numRows, value, change, name }) => {
    return (
        <textarea
            className='transition-all bg-transparent border border-white rounded px-2 py-1 text-white focus:text-white focus:border-c-pink focus:drop-shadow-pink focus:outline-none'
            rows={numRows}
            value={value}
            onChange={(e) => change(e)}
            name={name}
            required></textarea>
    )
}

export default CustomTextArea
