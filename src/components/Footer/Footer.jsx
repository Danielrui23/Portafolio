
import Container from "react-bootstrap/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <Container fluid className="footer-content">
      <div className="copyright">
        &copy; 2024 - Gustavo Daniel Ruiz - Frontend Developer
      </div>
      <div className="socials">
        <a href="http://">
          <FontAwesomeIcon icon={faGithub} className="icons-home" />
        </a>
        <a href="http://">
          <FontAwesomeIcon icon={faLinkedin} className="icons-home" />
        </a>
        <a href="http://">
          <FontAwesomeIcon icon={faInstagram} className="icons-home" />
        </a>
      </div>
    </Container>
  );
}

export default Footer;
