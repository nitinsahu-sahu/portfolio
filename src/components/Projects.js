import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import wsmWpImg from "../assets/img/wsm-wp.png";
import rsWpImg from "../assets/img/rs-wp.png";
import sWpImg from "../assets/img/s-wp.png";
import ssWpImg from "../assets/img/ss-wp.png";
import pciWpImg from "../assets/img/pci-wp.png";
import kareoMernImg from "../assets/img/kareo-mern.png";
import wzReactImg from "../assets/img/wz-react.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const wpprojects = [
    {
      title: "Wall Street Metal",
      description: "The precious metals market is built for corporations, governments, and fund managers. We’re built for individuals like retired veterans and small business owners. We’re here for you.",
      imgUrl: wsmWpImg,
      webLink: 'https://wallstreetmetals.com/',
    },
    {
      title: "Rock Star",
      description: "Rockstar Sealing Systems is a leading provider of cleaning and sealing solutions for all natural stone surfaces.",
      imgUrl: rsWpImg,
      webLink: 'https://www.rockstarsealing.com/',

    },
    {
      title: "Serta",
      description: "Discover a comfortable. supportive matress.",
      imgUrl: sWpImg,
      webLink: 'https://www.serta.com/',

    },
    {
      title: "SkipStone",
      description: "We secure our financial resources independently, enabling us to produce economical, cost-effective films.",
      imgUrl: ssWpImg,
      webLink: 'https://skipstonepictures.com/',

    },
    {
      title: "Pratham Career Institue",
      description: "Our aim is not only to get you to the top medical college but more importantly we also take you on the path of realization to make you discuss your latest potential and top this potential to bring out best of you.",
      imgUrl: pciWpImg,
      webLink: 'https://prathamcareerinstitute.com/',

    },
  ];
  const reactprojects = [
    {
      title: "Whizoid Studio",
      description: "Crafting Solutions For The Modern World.",
      imgUrl: wzReactImg,
      webLink: "https://www.whizoid.com/",
    },
  ];
  const mernprojects = [
    {
      title: "Kareo",
      description: "Kareo and PatientPop have joined forces to improve the patient experience and fully support providers, ushering in a new era of connected practice.",
      imgUrl: kareoMernImg,
      webLink: 'https://www.kareo.com/ehr',
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 style={{marginBottom:34}}>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">React Js</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">MERN STACK</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">WordPress</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            reactprojects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {
                            mernprojects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            wpprojects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
