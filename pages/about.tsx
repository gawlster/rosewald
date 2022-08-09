import { NextPage } from 'next'
import React from 'react'
import Navbar from '../components/Navbar'

const About: NextPage = () => {
    return (
        <div className='page'>
            <Navbar current='about' />
        </div>
    )
}

export default About
