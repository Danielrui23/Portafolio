// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHtml5,
//   faJs,
//   faCss3Alt,
//   faBootstrap,

// } from "@fortawesome/free-brands-svg-icons";

import { Container, Card, Col, Row } from "react-bootstrap";

const dataCards = [
  {
    id: 1,
    title: "Mundo Pan!",
    image: "https://i.imgur.com/iMwEbCL.png",
    description:
      "Web de panaderia con distintas secciones, donde se muestra los tipos de productos y servicios que ofrece.",
    link: "https://diariopanorama.com/",
  },
  {
    id: 2,
    title: "DiarioPanorama",
    image: "https://i.imgur.com/iMwEbCL.png",
    description: "Es un proyecto web de un diario puramente Santiagueño.",
    link: "https://diariopanorama.com/",
  },
  {
    id: 3,
    title: "Diario Olé",
    image: "https://i.imgur.com/iMwEbCL.png",
    description: "diario deportivo",
    link: "https://www.ole.com.ar/",
  },
  {
    id: 4,
    title: "Nike Arg",
    image: "https://i.imgur.com/iMwEbCL.png",
    description: "Tienda de ropa y calzados deportivos y de moda.",
    link: "https://www.nike.com.ar/",
  },
  {
    id: 5,
    title: "Lorem ipsum",
    image: "https://i.imgur.com/iMwEbCL.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    link: "https://www.nike.com.ar/",
  },
  {
    id: 6,
    title: "Laborum alia",
    image: "https://i.imgur.com/iMwEbCL.png",
    description: 'Assumenda quae, dolorem fugiat vel asperiores ullam aliquam at nam!',
    link: "https://www.nike.com.ar/",
  },
];

function Projects() {
  return (
    <Container id="projects">
      <div className="content-sobremi">
        <h2 className="sobremi">Proyectos</h2>
      </div>
      <Row xs={1} md={3} className="g-4">
        {dataCards.map((cards) => {
          return (
            <Col sm={5} key={cards.id}>
              <div className="card-holder">
                <Card>
                  <Card.Body>
                  <Card.Img variant="top" src={cards.image} />
                    <Card.Title>{cards.title}</Card.Title>
                    <Card.Text>{cards.description}</Card.Text>
                  {/*  <FontAwesomeIcon icon={faHtml5} className="icons" />
                    <FontAwesomeIcon icon={faCss3Alt} className="icons" />
                    <FontAwesomeIcon icon={faJs} className="icons" />
                    <FontAwesomeIcon icon={faBootstrap} className="icons" />
                     <a href={cards.link} className="">
                      Ver
                    </a> */}
                  </Card.Body>
                </Card>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Projects;
