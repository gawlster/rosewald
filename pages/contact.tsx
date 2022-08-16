import axios from 'axios'
import { NextPage } from 'next'
import Image from 'next/image'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import CustomInput from '../components/CustomInput'
import CustomLabel from '../components/CustomLabel'
import CustomTextArea from '../components/CustomTextArea'
import Navbar from '../components/Navbar'
import Botpoison from '@botpoison/browser'

const botpoison = new Botpoison({
    publicKey: 'pk_67fbefc4-fed9-4972-99e8-cbd66efced7d',
})

const Contact: NextPage = () => {
    const [imageNumber, setImageNumber] = useState('')
    const [narrowScreen, setNarrowScreen] = useState(true)
    const [shortScreen, setShortScreen] = useState(true)

    const [fname, setFName] = useState('')
    const [lname, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [formResult, setFormResult] = useState({ class: '', text: '' })

    const [submitting, setSubmitting] = useState(false)

    useEffect(() => {
        const numPics = 13
        const num = Math.floor(Math.random() * numPics) + 1
        setImageNumber(`${num}`)
    }, [])

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setSubmitting(true)
        await postSubmission()
        setSubmitting(false)
    }
    async function postSubmission() {
        const formSparkURL = 'https://submit-form.com/UVJicB0Z'
        const payload = {
            fname,
            lname,
            email,
            phone,
            message,
        }
        try {
            const { solution } = await botpoison.challenge()

            await axios.post(formSparkURL, payload)
            setFormResult({
                class: 'text-center p-3 absolute z-50 top-0 w-full bg-success-green',
                text: 'Form submitted successfully. I will get back to you as soon as possible!',
            })
            setFName('')
            setLName('')
            setEmail('')
            setPhone('')
            setMessage('')
        } catch (err) {
            setFormResult({
                class: 'text-center p-3 absolute z-50 top-0 w-full bg-error-red',
                text: 'There was an error. Please try again or email directly to rosewald2003@gmail.com',
            })
        }
    }

    function handleChange(e: any, field: string) {
        if (field === 'fname') {
            setFName(e.target.value)
        } else if (field === 'lname') {
            setLName(e.target.value)
        } else if (field === 'email') {
            setEmail(e.target.value)
        } else if (field === 'phone') {
            setPhone(e.target.value)
        } else if (field === 'message') {
            setMessage(e.target.value)
        } else {
            throw new Error()
        }
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
                    {formResult.class !== '' && (
                        <div className={formResult.class}>
                            <div>{formResult.text}</div>
                            <div
                                className='cursor-pointer hover:text-black transition-all italic text-sm'
                                onClick={() => {
                                    setFormResult({ class: '', text: '' })
                                }}>
                                Close menu
                            </div>
                        </div>
                    )}
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
                                onSubmit={(e) => handleSubmit(e)}
                                className='flex flex-col gap-2 relative w-full text-sm sm:text-md'
                                autoComplete='off'>
                                <div className=' flex flex-row justify-between items-center w-full'>
                                    <div className='w-[47%]'>
                                        <CustomLabel>
                                            First name
                                            <CustomInput
                                                name='First name'
                                                type='text'
                                                value={fname}
                                                change={(e: any) => handleChange(e, 'fname')}
                                            />
                                        </CustomLabel>
                                    </div>
                                    <div className='w-[47%]'>
                                        <CustomLabel>
                                            Last name
                                            <CustomInput
                                                name='Last name'
                                                type='text'
                                                value={lname}
                                                change={(e: any) => handleChange(e, 'lname')}
                                            />
                                        </CustomLabel>
                                    </div>
                                </div>
                                <div className=' flex flex-row justify-between items-center'>
                                    <div className='w-[47%]'>
                                        <CustomLabel>
                                            Email
                                            <CustomInput
                                                name='Email'
                                                type='email'
                                                value={email}
                                                change={(e: any) => handleChange(e, 'email')}
                                            />
                                        </CustomLabel>
                                    </div>
                                    <div className='w-[47%]'>
                                        <CustomLabel>
                                            Phone {!narrowScreen && 'number'}
                                            <CustomInput
                                                name='Phone number'
                                                type='phone'
                                                value={phone}
                                                change={(e: any) => handleChange(e, 'phone')}
                                            />
                                        </CustomLabel>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div>
                                        <CustomLabel>
                                            How can I help?
                                            <CustomTextArea
                                                name='Message'
                                                numRows={4}
                                                value={message}
                                                change={(e: any) => handleChange(e, 'message')}
                                            />
                                        </CustomLabel>
                                    </div>
                                </div>
                                <div className='h-2'></div>
                                <button
                                    type='submit'
                                    className=' text-white font-normal hover:text-c-pink hover:drop-shadow-pink-sm hover:font-bold transition-all cursor-pointer w-full flex justify-center items-center'>
                                    {submitting ? 'SUBMITTING...' : 'SUBMIT'}
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
