import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, webLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <a href={webLink} target="__blank" style={{color:'white '}}>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  )
}
