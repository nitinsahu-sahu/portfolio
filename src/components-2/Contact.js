import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useForm } from '@formspree/react';
import { ContactFormFeild, ContactFormFeildTextArea } from '../components/common/Common'

export const Contact = () => {
  const [state, setState] = useForm("xpzgwvqo");
  
  return (
    <section className="contact" id="connect">

      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>

          </Col>
          <Col size={12} md={6}>

            <TrackVisibility>

              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={setState}>
                    <ContactFormFeild
                      fieldname="First name"
                      type="text"
                      id="firstname"
                      prefix="FName"
                      state={state}
                    />
                    <ContactFormFeild fieldname="Last name" type="text" id="lastname" prefix="LName" state={state} />
                    <ContactFormFeild fieldname="Email Address" type="email" id="email" prefix="Email" state={state} />
                    <ContactFormFeild fieldname="Phone No." type="tel" id="phone" prefix="Phone" state={state} />
                    <ContactFormFeildTextArea id="message" prefix="Message" state={state} />
                    <button type="submit" disabled={state.submitting}>
                      Submit
                    </button>
                    {
                      state.succeeded ? <p>Thanks for joining!</p> : null
                    }
                  </form>

                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
