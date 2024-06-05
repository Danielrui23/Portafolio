
import { Container, Col, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faJs,
  faCss3Alt,
  faBootstrap,
  faGitAlt,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import 'animate.css';

function AboutMe() {
  return (
    <Container id="aboutMe">
      <Row className="content-sobremi">
        <h2 className="sobremi">Sobre Mi</h2>

        <Col xs={12} md={4} className="bordes">
          <img
            className="img-perfil"
            src="https://i.imgur.com/xvRYgwa.png"
            alt="foto de perfil"
          />
        </Col>

        <Col xs={12} md={8}>
          <Col>
            <div className="content-sobremi-text">
              <p>
                Como programador web, mi entusiasmo por la
                tecnología me impulsa a ofrecer soluciones personalizadas para
                proyectos diversos y estoy comprometido a materializar tus ideas
                creando sitios web a medida.
              </p>
            </div>
          </Col>

          <Col>
            <div className="content-icons">
              <h4>Habilidades</h4>
              <FontAwesomeIcon icon={faHtml5} className="icons" />
              <FontAwesomeIcon icon={faCss3Alt} className="icons" />
              <FontAwesomeIcon icon={faJs} className="icons" />
              <FontAwesomeIcon icon={faBootstrap} className="icons" />
              <FontAwesomeIcon icon={faReact} className="icons" />
              <FontAwesomeIcon icon={faGitAlt} className="icons" />
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
