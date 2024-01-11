import React from 'react'
import { PortfolioHead, TimeLine } from '../../public-component'

const Eduction = () => {
    const education = [
        {
            yearIn: "2017",
            yearOut: "2020",
            university: "Davi Aahilya Bai University",
            subject: "Computer Engineering",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            yearIn: "2014",
            yearOut: "2017",
            university: "Rajiv Gandhi University",
            subject: "Computer Science Diploma",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            yearIn: "2013",
            yearOut: "2014",
            university: "Madhya Pradesh Board",
            subject: "12th",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            yearIn: "2012",
            yearOut: "2013",
            university: "Madhya Pradesh Board",
            subject: "10th",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
    ];
    return (
        <div className='col-sm-12 col-md-6 col-lg-6'>
            <PortfolioHead heading="Eductions" />
            {
                education.map((item, index) =>
                    <TimeLine key={index} yearIn={item.yearIn} yearOut={item.yearOut} university={item.university} subject={item.subject} description={item.description}/>
                )
            }

        </div>
    )
}

export default Eduction