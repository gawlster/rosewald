import React from 'react'

const CustomTextArea: React.FC<{ numRows: number }> = ({ numRows }) => {
    return (
        <textarea
            className='transition-all bg-transparent border border-white rounded px-2 py-1 text-white focus:text-white focus:border-c-pink focus:drop-shadow-pink focus:outline-none'
            rows={numRows}></textarea>
    )
}

export default CustomTextArea
