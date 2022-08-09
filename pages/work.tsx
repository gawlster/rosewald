import { NextPage } from 'next'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SampleImage from '../components/SampleImage'

const Work: NextPage = () => {
    const [arrayNumPics, setArrayNumPics] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const numPics = 13
        setArrayNumPics(new Array(numPics).fill(0))
        setLoading(false)
    }, [])

    return (
        <div className='page'>
            <Navbar current='work' />
            {!loading && (
                <div className='w-full h-full flex flex-col justify-center items-center gap-6 p-4'>
                    <div className='font-semibold text-center'>
                        Choosing the right photographer can be tricky. Here are some of my recent
                        works to help you be confident with your decision.
                    </div>
                    <div className='flex flex-row gap-2 justify-start w-full overflow-auto'>
                        {arrayNumPics.map((_, i) => {
                            return (
                                <div key={i + 1}>
                                    <SampleImage imagePath={`/sample${i + 1}.jpg`} />
                                </div>
                            )
                        })}
                    </div>
                    <Link
                        href='/contact'
                        className='italic font-light cursor-pointer text-center transition-all hover:font-bold hover:not-italic hover:drop-shadow-green-sm hover:text-c-green focus:font-bold focus:not-italic focus:text-c-green'>
                        Like what you see?
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Work
