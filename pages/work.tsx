import { NextPage } from 'next'
import React from 'react'
import Navbar from '../components/Navbar'

const Work: NextPage = () => {
    return (
        <div className='page'>
            <Navbar current='work' />
        </div>
    )
}

export default Work
