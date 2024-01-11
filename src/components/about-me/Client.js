import React from 'react'
import { PortfolioHead } from '../public-component'
import whizoid from '../../assets/img/whizoid.svg'
import Kareo from '../../assets/img/kareo-atc.svg'
import wallstreetmetals from '../../assets/img/Wall-Street-Metals-Christmas-logo.png'
import rockstar from '../../assets/img/rockstar-logo.jpg'
import pci from '../../assets/img/pci-logo.png'
import { Link } from 'react-router-dom'
const Client = () => {
  const clints = [
    {
      website_name: "Whizoid",
      logo: whizoid,
      link: "https://www.whizoid.com/",
    },
    {
      website_name: "Kareo",
      logo: Kareo,
      link: "https://www.kareo.com/ehr",
    },
    {
      website_name: "Wall Street Metals",
      logo: wallstreetmetals,
      link: "https://wallstreetmetals.com/",
    },
    {
      website_name: "Rockstar",
      logo: rockstar,
      link: "https://www.rockstarsealing.com/",
    },
    {
      website_name: "Pratham Career Institute",
      logo: pci,
      link: "https://prathamcareerinstitute.com/",
    },
  ];
  return (
    <div className='row Clients my-4'>
      <PortfolioHead heading="Clients" />
      <div className='row'>
        {
          clints.map((item, index) =>
            <div className='col-sm-12 col-md-1 col-lg-2' key={index} >
              <Link>
              <img src={item.logo} height={80} width={160} alt={item.website_name}/>
              </Link>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Client