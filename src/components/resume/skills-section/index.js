import React from 'react'
import { PortfolioHead, SkillsTimeLine } from '../../public-component'


const SkillandTech = () => {
    const skillSet = [
        {
            skilltitle: "Html / Css",
            skillpercent: "90%"
        },
        {
            skilltitle: "JavaScript",
            skillpercent: "85%"
        },
        {
            skilltitle: "React JS",
            skillpercent: "90%"
        },
        {
            skilltitle: "Node JS",
            skillpercent: "80%"
        },
        {
            skilltitle: "Mongo DB",
            skillpercent: "80%"
        },
        {
            skilltitle: "Express JS",
            skillpercent: "70%"
        },
        {
            skilltitle: "GitHub",
            skillpercent: "80%"
        },
        {
            skilltitle: "BootStrap",
            skillpercent: "90%"
        },
    ];
    return (
        <div className='row wc'>
            <PortfolioHead heading="Technical Skills" />
            {
                skillSet.map((item, index) =>
                    <SkillsTimeLine skilltitle={item.skilltitle} skillpercent={item.skillpercent} key={index} />
                )
            }
        </div>
    )
}

export default SkillandTech