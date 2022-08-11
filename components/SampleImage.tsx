import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const SampleImage: React.FC<{ imagePath: string }> = ({ imagePath }) => {
    const router = useRouter()

    useEffect(() => {
        window.addEventListener('mouseover', () => {})
    }, [])

    return (
        <div className='w-64 h-80'>
            <div className='relative w-full h-full sample-pic'>
                <div className='front absolute bg-black/60 z-10 w-full h-full flex justify-center items-center'>
                    <div
                        onClick={() => router.push('/contact')}
                        className='button px-6 py-2 rounded bg-c-pink hover:drop-shadow-pink cursor-pointer transition-all font-bold'>
                        LEARN MORE
                    </div>
                </div>
                <Image alt='' src={imagePath} layout='fill' objectFit='cover' />
            </div>
        </div>
    )
}

export default SampleImage
