import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar'

const About: NextPage = () => {
    return (
        <div className='page'>
            <Navbar current='about' />
            <div className='w-full h-full flex flex-col justify-center items-center p-10 gap-10'>
                <div className='text-center flex flex-col gap-2'>
                    <div>
                        Hey! My name is{' '}
                        <div className='inline green-glow font-bold'>Kaleigh Johnston</div>, I am a
                        young adult and I specialize in portrait photography. My work is based in
                        Calgary, Alberta. I love the art of photography, so I dabble a bit in all
                        areas and enjoy learning more every day.
                    </div>
                    <div>
                        My goal is to help you achieve the look you want while also creating a{' '}
                        <div className='inline font-bold text-c-pink'>comfortable</div> and{' '}
                        <div className='inline font-bold text-c-pink'>welcoming</div> environment
                        you'll love being in. I believe every picture tells a million stories and
                        I'd be thrilled to help you write yours! I hope to work with you soon!
                    </div>
                </div>
                <div className='italic font-light cursor-pointer text-center transition-all hover:font-bold hover:not-italic hover:drop-shadow-green-sm hover:text-c-green focus:font-bold focus:not-italic focus:text-c-green'>
                    <Link href='/contact'>Sound like a plan?</Link>
                </div>
            </div>
        </div>
    )
}

export default About
