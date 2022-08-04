import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faSquarePhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const linkStyles =
    'italic font-light cursor-pointer text-center transition-all hover:font-bold hover:not-italic hover:text-c-green focus:font-bold focus:not-italic focus:text-c-green'

const Home: NextPage = () => {
    return (
        <div className='page'>
            <div className='w-full h-full flex justify-center items-center py-3'>
                <div className='w-full h-full flex flex-col justify-center items-center'>
                    <div className='relative h-2/3 max-h-80 w-2/3 max-w-80'>
                        <Image alt='Logo' src='/logo.png' layout='fill' objectFit='contain'></Image>
                    </div>
                    <div className='pink-glow text-[1.875rem] font-bold text-center'>
                        ROSEWALD STUDIOS
                    </div>
                    <div className='w-full flex flex-row justify-center items-center gap-3'>
                        <Link href='/about' className={linkStyles}>
                            <a className={linkStyles}>About Kaleigh</a>
                        </Link>
                        <Link href='/work' className={linkStyles}>
                            <a className={linkStyles}>See my work</a>
                        </Link>
                        <Link href='/contact'>
                            <a className={linkStyles}>Get in touch</a>
                        </Link>
                    </div>
                    <div className='h-3'></div>
                    <div className='flex flex-row gap-2 justify-center items-center'>
                        <hr
                            style={{
                                background: 'white',
                                color: 'white',
                                height: '1px',
                                width: '40px',
                            }}
                        />
                        <a href='https://www.facebook.com' target='_blank'>
                            <FontAwesomeIcon
                                icon={faFacebookSquare}
                                fontSize='25px'
                                className='hover:text-c-green transition-all cursor-pointer'
                            />
                        </a>
                        <a href='https://www.instagram.com'>
                            <FontAwesomeIcon
                                icon={faInstagramSquare}
                                fontSize='25px'
                                className='hover:text-c-green transition-all cursor-pointer'
                            />
                        </a>
                        <a href='https://www.google.com'>
                            <FontAwesomeIcon
                                icon={faSquarePhone}
                                fontSize='25px'
                                className='hover:text-c-green transition-all cursor-pointer'
                            />
                        </a>
                        <a href='https://www.gmail.com'>
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                fontSize='25px'
                                className='hover:text-c-green transition-all cursor-pointer'
                            />
                        </a>
                        <hr
                            style={{
                                background: 'white',
                                color: 'white',
                                height: '1px',
                                width: '40px',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
