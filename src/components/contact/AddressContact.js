import React from 'react'
import { CiMobile4 } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FormInput, FormTextArea, PortfolioButton, PortfolioHead } from '../public-component/index'
const AddressContact = () => {
    return (
        <div className='container mx-4'>
            <div className='row wc'>
                <div className='col-sm-12 col-md-4 col-lg-4 my-5'>
                    <div className='info-block d-flex'>
                        <div className='con-info-icon' style={{ color: "#007ced" }}><CiMobile4 size={40} /></div>
                        <div className='con-info-text fw-bold'>
                            <Link to='tel:8839525733'><h5>91-8839525733</h5></Link>
                            <Link to='tel:9111118326'><h5>91-9111118326</h5></Link>
                        </div>
                    </div>
                    <div className='info-block d-flex'>
                        <div className='con-info-icon' style={{ color: "#007ced" }}><IoLocationOutline size={40} /></div>
                        <div className='con-info-text fw-bold'>
                            <h5>Permanent Add : Naya Bazar, Lashkar, Gwalior</h5>
                            <h5>Current Add : Geeta Bhawan, Indore</h5>
                        </div>
                    </div>
                    <div className='info-block d-flex'>
                        <div className='con-info-icon' style={{ color: "#007ced" }}><HiOutlineMailOpen size={40} /></div>
                        <div className='con-info-text fw-bold'>
                            <Link to='mailto:nitinsahu911111@gmail.com'><h5>nitinsahu911111@gmail.com</h5></Link>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-8 col-lg-8'>
                    <PortfolioHead heading="How Can I Help You?" />
                    <div className='row'>
                        <form >
                            <div className='d-flex'>
                                <div className='col-sm-12 col-md-5 col-lg-5 m-1'>
                                    <FormInput type='text' className="form-control mt-3 mb-4" placeholder='Full Name' />
                                    <FormInput type='email' className="form-control my-4" placeholder='Email Address' />
                                    <FormInput type='text' className="form-control my-4" placeholder='Subject' />
                                </div>
                                <div className='col-sm-12 col-md-5 col-lg-5 m-1'>
                                    <FormTextArea className='form-control my-3' placeholder='Message' rows='6' />
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-5 col-lg-5 m-1'>
                                <PortfolioButton type='submit'>Send</PortfolioButton>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressContact