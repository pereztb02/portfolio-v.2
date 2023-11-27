import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Selfie from "../assets/selfie.jpeg";

export default function HomePage() {
  return (
    <Container className="abt-container">
      <Image className="selfie" src={Selfie} roundedCircle />
      <Row>
        <Col xs={6} md={4}></Col>
        <p>
          Hey there, I'm Tiffany, a web developer from the bustling streets of
          New York. Between my love for sports and science, I've channeled my
          energy into crafting exceptional websites. My journey in web
          development has been a thrilling adventure, from creating sleek
          personal blogs to dynamic e-commerce platforms. I'm always eager to
          embrace the latest trends and technologies, ensuring that every
          project I work on exceeds expectations. Explore my portfolio to
          witness the fusion of my passion and technical prowess, and let's
          connect to create something extraordinary together!
        </p>
      </Row>
    </Container>
  );
}
