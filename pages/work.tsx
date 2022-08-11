import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
        let newArr = new Array(numPics).fill(0)
        newArr.forEach((_, i) => {
            newArr[i] = i + 1
        })
        setArrayNumPics(newArr)
        setLoading(false)
    }, [])

    function handleScrollClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>, dir: number) {
        //? dir: 0 if need to scroll left, 1 otherwise
        const photoDiv = document.querySelector('.PICS')

        const scrollMultiple = 1.7
        if (photoDiv) {
            //get width of the screen
            const screenWidth = window.innerWidth
            // scrollPos = position of the scroll from the left in px
            const scrollPos = photoDiv.scrollLeft
            let newPos = 0
            if (dir === 0) {
                // scroll left
                newPos = scrollPos - screenWidth / scrollMultiple
            } else {
                // scroll right
                newPos = scrollPos + screenWidth / scrollMultiple
            }
            photoDiv.scrollTo({ left: newPos })
        }
    }

    return (
        <div className='page'>
            <Navbar current='work' />
            {!loading && (
                <div className='w-full h-full flex flex-col justify-center items-center gap-6 p-4'>
                    <div className='font-semibold text-center'>
                        Choosing the right photographer can be tricky. Here are some of my recent
                        works to help you be confident with your decision.
                    </div>
                    <div className='flex flex-row gap-2 justify-start w-full relative'>
                        <div className='PICS scrollbar-hide flex flex-row gap-2 justify-start w-full overflow-auto relative px-8 scroll-smooth'>
                            {arrayNumPics.map((_) => {
                                return (
                                    <div key={_}>
                                        <SampleImage imagePath={`/sample${_}.jpg`} />
                                    </div>
                                )
                            })}
                        </div>
                        <div
                            className='absolute drop-shadow-black top-1/2 -translate-y-1/2 left-0 text-3xl text-black cursor-pointer hover:text-c-green-d transition-all'
                            onClick={(e) => handleScrollClick(e, 0)}>
                            <div className='w-full h-[30px] drop-shadow-black-dark translate-y-[12.5%] absolute -z-10 left-0 right-0 top-0 bottom-0 rounded-full bg-white' />
                            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                        </div>
                        <div
                            className='absolute drop-shadow-black top-1/2 -translate-y-1/2 right-0 text-3xl text-black cursor-pointer hover:text-c-green-d transition-all'
                            onClick={(e) => handleScrollClick(e, 1)}>
                            <div className='w-full h-[30px] drop-shadow-black-dark translate-y-[12.5%] absolute -z-10 left-0 right-0 top-0 bottom-0 rounded-full bg-white' />
                            <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </div>
                    </div>
                    <div className='italic font-light cursor-pointer text-center transition-all hover:font-bold hover:not-italic hover:drop-shadow-green-sm hover:text-c-green focus:font-bold focus:not-italic focus:text-c-green'>
                        <Link href='/contact' className=''>
                            Like what you see?
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Work
