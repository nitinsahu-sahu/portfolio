import { Col, Row } from "react-bootstrap";
const RESUME_PDF = 'https://nitinsahu-sahu.github.io/Nitin_latest.pdf'
const RESUME_PDF1 = 'http://localhost:3000/Nitin_latest.pdf'
export const Newsletter = () => {
  const downloadPdf = (url) => {
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5} style={{alignContent:'center', display:'grid'}}>
            <h3>Download Resume</h3>
          </Col>
          <Col md={6} xl={7}>
            <div className="new-download-bx" style={{ justifyContent: 'center' }}>
              <button onClick={() => { downloadPdf(RESUME_PDF) }}>Download</button>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
