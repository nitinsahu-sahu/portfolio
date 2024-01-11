import React from 'react'
import { PortfolioHead, PortfolioWhatIDoCard } from '../public-component'

const WhatIDo = () => {
  const whatcando = [
    {
      skill: "E-commerce",
      description: "E-commerce, short for electronic commerce, is the buying and selling of goods or services over the internet. It involves online transactions between businesses, consumers, or even between individuals, allowing purchases to be made virtually, often through websites or online platforms."
    },
    {
      skill: "Full Stack Development",
      description: "A full stack developer is someone who has expertise in both front-end and back-end web development. They're proficient in working on the entire technology stack of a web application, handling both the user-facing parts (front end) and the server, databases, and logic (back end). "
    },
    {
      skill: "Web Developer",
      description: "A web developer is a professional who specializes in building and maintaining websites or web applications. They use programming languages like HTML, CSS, and JavaScript to create the structure, design, and functionality of websites, ensuring they work well across different devices and browsers. "
    },
  ];

  return (
    <div className='row WhatIDo'>
      <PortfolioHead heading="What I Do" />
      {
        whatcando.map((data, index) =>
          <PortfolioWhatIDoCard data={data} key={index}/>
        )
      }
    </div>
  )
}

export default WhatIDo