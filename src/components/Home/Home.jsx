import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import 'animate.css';


const ImageBackgroundComponent = () => {
  return (
    <Container fluid className="bg-image-container" id="home">
      <Row>
        <Col className='content-text-home'>
          <h1 className="text-title">Hola! soy <span>Gustavo </span>Daniel</h1>
          <h3 className='text-subtitle animate__animated animate__pulse' >Desarrollador Front-end</h3>
          
          <Col>
            <a download href="#">
              <button className='btn-dcv'>Download CV</button>
            </a>
            <Col>
              <a href="https://github.com/Danielrui23" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareGithub} className='icons-home'/></a>
              <a href="https://www.linkedin.com/in/gustavo-daniel-ruiz-7061781b1/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="icons-home"/></a>
            </Col>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default ImageBackgroundComponent;
