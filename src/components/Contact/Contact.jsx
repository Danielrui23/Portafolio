import { Col, Container, Row, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Contact() {
  return (
    <Container id="contact">
      <Row className="rowContact">
        <h2 className="sobremi">Contacto</h2>
        <Col xs={11} md={8}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Lilian"
                maxLength="25" minLength="6" 
                name="name"
                className="contact-bord"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="user@example.com"
                name="email"
                className="contact-bord"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Escribe tu mensaje aquí" 
                name="message"
                className="contact-bord"
                required
              />
            </Form.Group>

            <Button className="btn-dcv btn-contact " type="submit">
              Enviar mensaje
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
