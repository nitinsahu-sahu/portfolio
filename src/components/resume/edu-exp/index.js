import React from 'react'
import { PortfolioHead } from '../../public-component'
import Experience from './Experience'
import Eduction from './Eduction'

const EduExp = () => {
    return (
        <div className='row wc'>
            <Eduction />
            <Experience />
        </div>
    )
}

export default EduExp