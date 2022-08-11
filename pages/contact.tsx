import { NextPage } from 'next'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import CustomInput from '../components/CustomInput'
import CustomLabel from '../components/CustomLabel'
import CustomTextArea from '../components/CustomTextArea'
import Navbar from '../components/Navbar'

const Contact: NextPage = () => {
    const [imageNumber, setImageNumber] = useState('')
    const [narrowScreen, setNarrowScreen] = useState(true)
    const [shortScreen, setShortScreen] = useState(true)

    useEffect(() => {
        setImageNumber('11')
    }, [])

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    useEffect(() => {
        async function getScreenSize() {
            while (!window) {
                continue
            }
            if (window.innerWidth > 650) {
                setNarrowScreen(false)
            } else {
                setNarrowScreen(true)
            }

            if (window.innerHeight > 850) {
                setShortScreen(false)
            } else {
                setShortScreen(true)
            }
        }
        getScreenSize()
    }, [])

    return (
        <div className='page'>
            <Navbar current='contact' />
            <div className='h-full w-ful flex flex-col items-center justify-center'>
                <div className='w-2/3 max-w-2xl bg-[#484848] h-4/5 rounded relative overflow-auto mt-12 mb-8'>
                    <div className='absolute h-full w-full rounded'>
                        <div className='h-2/3 w-full grayscale relative rounded overflow-hidden'>
                            <Image
                                alt=''
                                src={`/sample${imageNumber}.jpg`}
                                layout='fill'
                                objectFit='cover'
                            />
                            <div className='bg-gradient-to-t from-[#484848] via-[#484848] absolute -bottom-1 right-0 w-full h-3/4' />
                        </div>
                    </div>
                    <div className='absolute w-full bottom-0 p-8 flex flex-col justify-center items-center gap-5'>
                        <div className='flex flex-col gap-4 w-full'>
                            <div
                                className={`w-full flex flex-col gap-1 text-center ${
                                    shortScreen && 'drop-shadow-black'
                                }`}>
                                <div className='text-[1.7rem] font-bold italic'>Get in touch!</div>
                                <div>
                                    For bookings and inquiries, fill out the form below, and
                                    I&apos;ll get back to you as soon as possible.
                                </div>
                            </div>
                            <form
                                action='#'
                                onSubmit={(e) => handleSubmit(e)}
                                className='flex flex-col gap-2 relative w-full text-sm sm:text-md'
                                autoComplete='off'>
                                <div className=' flex flex-row justify-between items-center w-full'>
                                    <div className='w-[47%]'>
                                        <CustomLabel>
                                            First name
                                            <CustomInput type='text' />
                                        </CustomLabel>
                                    </div>
                                    <div className='w-[47%]'>
                                        <CustomLabel>
                                            Last name
                                            <CustomInput type='text' />
                                        </CustomLabel>
                                    </div>
                                </div>
                                <div className=' flex flex-row justify-between items-center'>
                                    <div className='w-[47%]'>
                                        <CustomLabel>
                                            Email
                                            <CustomInput type='email' />
                                        </CustomLabel>
                                    </div>
                                    <div className='w-[47%]'>
                                        <CustomLabel>
                                            Phone {!narrowScreen && 'number'}
                                            <CustomInput type='phone' />
                                        </CustomLabel>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div>
                                        <CustomLabel>
                                            How can I help?
                                            <CustomTextArea numRows={4} />
                                        </CustomLabel>
                                    </div>
                                </div>
                                <div className='h-2'></div>
                                <button
                                    type='submit'
                                    className=' text-white font-normal hover:text-c-pink hover:drop-shadow-pink-sm hover:font-bold transition-all cursor-pointer w-full flex justify-center items-center'>
                                    SUBMIT
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
