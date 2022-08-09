import Image from 'next/image'
import React, { useEffect } from 'react'

const SampleImage: React.FC<{ imagePath: string }> = ({ imagePath }) => {
    useEffect(() => {
        window.addEventListener('mouseover', () => {})
    }, [])

    return (
        <div className='w-64 h-80'>
            <div className='front'></div>
            <div className='relative w-full h-full'>
                <Image alt='' src={imagePath} layout='fill' objectFit='cover' />
            </div>
        </div>
    )
}

export default SampleImage
