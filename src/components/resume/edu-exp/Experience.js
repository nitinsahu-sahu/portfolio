import React from 'react'
import { PortfolioHead, TimeLine } from '../../public-component'

const Experience = () => {
    const education = [
        {
            yearIn: "2023",
            yearOut: "current",
            designation: "MERN Stack Developer",
            description: "MERN Stack is a compilation of four different technologies that work together to develop dynamic web apps and websites. It is a contraction for four different technologies as mentioned below: M - MongoDB. E - ExpressJS. R - ReactJS."
        },
        {
            yearIn: "2022",
            yearOut: "current",
            designation: "React Js Developer",
            description: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript."
        },
        {
            yearIn: "2021",
            yearOut: "2022",
            designation: "WordPress Developer",
            description: "Build and grow your website with the best way to WordPress. Lightning-fast hosting, intuitive, flexible editing, and everything you need to grow your site and audience, baked right in."
        },
    ];
    return (
        <div className='col-sm-12 col-md-6 col-lg-6'>
            <PortfolioHead heading="Experience" />
            {
                education.map((item, index) =>
                    <TimeLine key={index} yearIn={item.yearIn} yearOut={item.yearOut} designation={item.designation} description={item.description}/>
                )
            }
        </div>
    )
}

export default Experience