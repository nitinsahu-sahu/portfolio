import React from 'react'
import Profile from './Profile'
import WhatIDo from './WhatIDo'
import Client from './Client'
const AboutMe = () => {
  return (
    <section className='container about  text-white'>
      <Profile />
      <Client />
      <WhatIDo />
    </section>
  )
}

export default AboutMe