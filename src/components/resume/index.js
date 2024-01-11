import React from 'react'
import EduExp from './edu-exp/index'
import SkillandTech from './skills-section'
import { PageHeader } from '../public-component'

const Resume = () => {
  return (
    <section className='container resume-head'>
      <PageHeader heading="Resume" title="2 Years and 5 Months of Experience at GBH Technologies Pvt. Ltd."/>
      <EduExp />
      <SkillandTech />
    </section>
  )
}

export default Resume