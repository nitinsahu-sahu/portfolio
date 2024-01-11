import React from 'react'
import { PageHeader } from '../public-component'
import AddressMap from './AddressMap'
import AddressContact from './AddressContact'

const Contact = () => {
  return (
    <section className='container resume-head'>
      <PageHeader heading="Contact Us" title="Get In Touch" />
      <AddressMap />
      <AddressContact />
    </section>
  )
}

export default Contact