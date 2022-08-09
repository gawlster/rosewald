import { NextPage } from 'next'
import React from 'react'
import Navbar from '../components/Navbar'

const Contact: NextPage = () => {
    return (
        <div className='page'>
            <Navbar current='contact' />
        </div>
    )
}

export default Contact
