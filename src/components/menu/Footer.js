import React from 'react'
import linkedInIcon from '../../assets/img/nav-icon1.svg';
import facebookIcon from '../../assets/img/nav-icon2.svg';
import instaIcon from '../../assets/img/nav-icon3.svg';
import { Link } from 'react-router-dom';
import { HrLine } from '../public-component';

const Footer = () => {
  return (
    <>
      <HrLine />
      <div className='row wc mb-4'>
        <div className='col-sm-12 col-md-6 col-lg-6 social-icon'>
            <Link to="https://www.linkedin.com/in/nitin-sahu-b3124919b" target="__blank" className="linkedin-icon"><img src={linkedInIcon} alt="" title="LinkedIn" /></Link>
            <Link to="https://www.facebook.com/nitin.sahu.100046/" target="__blank" className="facebook-icon"><img src={facebookIcon} alt="" title="Facebook" /></Link>
            <Link to="https://www.instagram.com/mr_sahuji_07/" target="__blank" className="insta-icon"><img src={instaIcon} alt="" title="Instagram" /></Link>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-6 justify-content-center' style={{alignItems:'center', display:'grid'}}>
          <p>© 2022 All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer