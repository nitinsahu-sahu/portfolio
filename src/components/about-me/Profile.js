import React, { useEffect, useState } from 'react'
import { PortfolioButton } from '../public-component';
const RESUME_PDF = 'https://drive.google.com/file/d/1r4NHbwEb-zkC46o4gUeHZtAYJHOcB1A5/view?usp=drive_link'


const Profile = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ['React Developer', "Web Developer", "Web Designer", "MERN STACK DEVELOPER"];
    const period = 2000;
    
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    const downloadPdf = (url) => {
        const fileName = url.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href = url
        aTag.setAttribute('download', fileName)
        aTag.setAttribute('target', "__blank")
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
      }
    return (
        <div className='row porfile-sec'>
            <div className=' col-xs-12 col-sm-12'>
                <div style={{ padding: '15px 0px 15px 0px' }}>
                    <div style={{ margin: '5% 10%' }}>
                        <div className='row'>
                            <div className='col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 d-grid' style={{ alignItems: 'center' }}>
                                <div className='home-pic'>
                                    <div className='hp-inner'></div>
                                </div>
                            </div>
                            <div className='col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 '>
                                <div className=''>
                                    <div style={{ minHeight: 12 }}>
                                        <span className="txt-rotate" data-rotate='["React Developer" ,"Web Developer", "Web Designer", "MERN STACK DEVELOPER" ]'>
                                            <h4 className="wrap"># {text}</h4>
                                        </span>
                                    </div>
                                    <h1 className='intro-name fw-bold'>Hi! I'am Nitin Sahu</h1>
                                    <p style={{ fontSize: '1rem', marginBottom:23 }}>
                                        Seeking a challenging MERN stack developer position where my expertise in MongoDB,
                                        Express.js, React, and Node.js can be leveraged to develop innovative, scalable,
                                        and user-centric web applications. With 3 years of hands-on experience in full-stack
                                        development, I aim to contribute my proficiency in building robust back-end systems and dynamic
                                        front-end interfaces to drive the success of GBH Technologies pvt Ltd. Passionate about staying
                                        updated with emerging technologies and delivering high-quality code.
                                    </p>
                                    <div className='row '>
                                        <PortfolioButton onClick={() => { downloadPdf(RESUME_PDF) }}>Download CV</PortfolioButton>
                                        <PortfolioButton link="contact">Contact</PortfolioButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile
