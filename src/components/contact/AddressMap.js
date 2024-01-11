import React from 'react'

const AddressMap = () => {
  return (
    <div className='my-5'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.048478065476!2d78.15472802612543!3d26.19510124055963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c43345b63775%3A0xb1bcd93bb9fa905a!2sNaya%20Bazaar%2C%20Ward%20No.%2046%2C%20Gwalior%2C%20Madhya%20Pradesh%20474009!5e0!3m2!1sen!2sin!4v1704715580295!5m2!1sen!2sin"
          width="100%"
          height="250"
          style={{ border: 0 }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  )
}

export default AddressMap