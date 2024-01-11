import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioButton = ({ children, link, onClick }) => {
    return (
        <div className='col-sm-2 col-md-4 col-lg-4'>
            <Link to={link} onClick={onClick}>
                <div className='common-btn' style={{ border: `5px solid #dee2e6` }}>
                    {children}
                </div>
            </Link>
        </div>
    )
}

const PortfolioHead = ({ heading }) => {
    return (
        <div className='col-sm-12 col-md-12 col-lg-12 head my-4'>
            <h2>{heading}</h2>
        </div>
    )
}

const PortfolioWhatIDoCard = ({ data, index }) => {
    return (
        <div className='col-sm 12 col-md-6 col-lg-4 my-3 ' key={index}>
            <div className="card" >
                <div className="card-body" style={{ padding: '2rem' }}>
                    <h4 className="card-title">{data.skill}</h4>
                    <p className="card-text">
                        {data.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

const HrLine = () => {
    return (
        <hr style={{ backgroundColor: 'white', opacity: 1 }} />
    )
}

const TimeLine = ({ yearIn, yearOut, university, subject, description, designation }) => {
    return (
        <div className='timeline clearfix'>
            <div className='timeline-item clearfix'>
                <div className="timeline-item clearfix">
                    <h5 className="item-period ">{yearIn} - {yearOut}</h5>
                    {
                        university ? <span className="item-company">{university} </span> : <span className="item-company">{designation} </span>
                    }

                    <h4 className="item-title">{subject}</h4>
                    <div className="text">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}

const SkillsTimeLine = ({ skilltitle, skillpercent }) => {
    return (
        <div className='col-sm-12 col-md-6 col-lg-6'>
            <div id="skills-658e613723e35" className="skills-info skills-first-style">
                <div className="d-flex">
                    <div className='col-sm-12 col-md-6 col-lg-6'><h4>{skilltitle}</h4></div>
                    <div className='col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end'>
                        <p style={{ color: '#aaa' }}>{skillpercent}</p>
                    </div>
                </div>
                <div id="skill-ec5d275ae4c1138a0547f7b8351f6db4" data-value="95" data-color="#007ced" className="skill-container">
                    <div style={{
                        backgroundColor: '#007ced',
                        border: '2px solid #fff',
                        borderRadius: 9,
                        height: 8,
                        padding: 0,
                        width: skillpercent
                    }}></div>
                </div>
            </div>
        </div>
    )
}

const PageHeader = ({ heading, title }) => {
    return (
        <div className='row wc resume-heading my-4'>
            <div className='col-sm-12 col-md-6 col-lg-6 my-5 d-flex justify-content-center'>
                <h1 className='fw-bold fs-3x'>{heading}</h1>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center mt-3'>
                <h6 style={{ color: '#aaa' }}>{title}</h6>
            </div>
        </div>
    )
}

const FormInput = ({ type, onChange, placeholder, required, className }) => {
    return (
        <input type={type} onChange={onChange} placeholder={placeholder} required={required} className={className} />
    )
}
const FormTextArea = ({ rows, cols, onChange, placeholder, required, className }) => {
    return (
        <textarea onChange={onChange} placeholder={placeholder} required={required} className={className} rows={rows} cols={cols} />
    )
}
export { FormTextArea, PageHeader, SkillsTimeLine, PortfolioButton, PortfolioHead, PortfolioWhatIDoCard, HrLine, TimeLine, FormInput }