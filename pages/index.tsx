import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const linkStyles =
    'italic font-light cursor-pointer text-center transition-all hover:font-bold hover:not-italic hover:text-c-green focus:font-bold focus:not-italic focus:text-c-green'

const Home: NextPage = () => {
    return (
        <div className='page'>
            <div className='w-full h-full flex justify-center items-center'>
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
                </div>
            </div>
        </div>
    )
}

export default Home
