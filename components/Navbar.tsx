import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Navbar: React.FC<{ current: 'about' | 'work' | 'contact' }> = ({ current }) => {
    const router = useRouter()

    const [hamburger, setHamburger] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const getScreenSize = () => {
            // get screen size
            const screenSize = window.innerWidth
            if (screenSize <= 650) {
                setHamburger(true)
            } else {
                setHamburger(false)
            }
        }

        getScreenSize()
        window.addEventListener('resize', getScreenSize)
    }, [])

    return (
        <div className='absolute z-50 top-0 right-0 left-0'>
            {hamburger ? (
                <div className='h-14 w-full flex justify-end p-4'>
                    {!open ? (
                        <div className='cursor-pointer' onClick={() => setOpen(true)}>
                            <div className='relative overflow-hidden h-14 w-10 flex items-center justify-center'>
                                <Image alt='' src={'/logo.png'} layout='fill' objectFit='cover' />
                            </div>
                        </div>
                    ) : (
                        <div className='absolute w-screen h-screen top-0 right-0 bg-neutral-800 text-xl'>
                            <div
                                className='absolute top-4 right-4 w-14 h-14 cursor-pointer text-white flex items-center justify-center text-xl hover:green-glow'
                                onClick={() => setOpen(false)}>
                                <FontAwesomeIcon icon={faX} />
                            </div>
                            <div className=' w-full h-full flex flex-col justify-center items-center'>
                                <div
                                    className={`${'italic font-light cursor-pointer text-center transition-all hover:font-bold hover:not-italic hover:text-c-green focus:font-bold focus:not-italic focus:text-c-green'}`}>
                                    <Link href='/'>Home</Link>
                                </div>
                                <div
                                    className={`${
                                        current === 'about'
                                            ? 'font-bold not-italic text-c-green'
                                            : 'italic font-light cursor-pointer text-center transition-all hover:font-bold hover:not-italic hover:text-c-green focus:font-bold focus:not-italic focus:text-c-green'
                                    }`}>
                                    <Link href='/about'>About Kaleigh</Link>
                                </div>
                                <div
                                    className={`${
                                        current === 'work'
                                            ? 'font-bold not-italic text-c-green'
                                            : 'italic font-light cursor-pointer text-center transition-all hover:font-bold hover:not-italic hover:text-c-green focus:font-bold focus:not-italic focus:text-c-green'
                                    }`}>
                                    <Link href='/work'>See my work</Link>
                                </div>
                                <div
                                    className={`${
                                        current === 'contact'
                                            ? 'font-bold not-italic text-c-green'
                                            : 'italic font-light cursor-pointer text-center transition-all hover:font-bold hover:not-italic hover:text-c-green focus:font-bold focus:not-italic focus:text-c-green'
                                    }`}>
                                    <Link href='/contact'>Get in touch</Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className='flex flex-row justify-between items-center px-4 py-3'>
                    <div
                        className='w-64 h-14 flex items-center justify-center cursor-pointer'
                        onClick={() => router.push('/')}>
                        <div className='flex items-center justify-center font-bold text-2xl'>
                            <p className='pink-glow hover:scale-105 transition-all'>
                                ROSEWALD STUDIOS
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center gap-5'>
                        <div
                            className={`${
                                current === 'about'
                                    ? 'font-bold not-italic text-c-green'
                                    : 'italic font-light cursor-pointer text-center transition-all hover:font-bold hover:not-italic hover:text-c-green focus:font-bold focus:not-italic focus:text-c-green'
                            }`}>
                            <Link href='/about'>About Kaleigh</Link>
                        </div>
                        <div
                            className={`${
                                current === 'work'
                                    ? 'font-bold not-italic text-c-green'
                                    : 'italic font-light cursor-pointer text-center transition-all hover:font-bold hover:not-italic hover:text-c-green focus:font-bold focus:not-italic focus:text-c-green'
                            }`}>
                            <Link href='/work'>See my work</Link>
                        </div>
                        <div
                            className={`${
                                current === 'contact'
                                    ? 'font-bold not-italic text-c-green'
                                    : 'italic font-light cursor-pointer text-center transition-all hover:font-bold hover:not-italic hover:text-c-green focus:font-bold focus:not-italic focus:text-c-green'
                            }`}>
                            <Link href='/contact'>Get in touch</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
