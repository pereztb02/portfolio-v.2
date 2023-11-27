import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Bookbinder from "../assets/screenshot-of-book-binder.png";
import DayPlanner from "../assets/screenshot-of-day-planner.png";
import Project1 from "../assets/screenshot-of-project1.png";
import Rr from "../assets/screenshot-of-randomrecipes-project.png";
import Button from "react-bootstrap/Button";
import Tracker from "../assets/screenshot-of-tracker.png";

export default function PortfolioPage() {
  return (
    <Row xs={1} md={2} className="g-4">
      <Card>
        <Card.Img className="card-img" variant="top" src={Bookbinder} />
        <Card.Body>
          <Card.Title>The Book Binder</Card.Title>
          <Card.Text>Collaborative Project.</Card.Text>
          <a
            href="https://notuneeven.github.io/Book-Binder/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary">View Project</Button>
          </a>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img className="card-img" variant="top" src={DayPlanner} />
        <Card.Body>
          <Card.Title>Single Day Scheduler</Card.Title>
          <Card.Text>Testing JS Skills.</Card.Text>{" "}
          <a
            href="https://pereztb02.github.io/single-day-scheduler/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary">View Project</Button>
          </a>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img className="card-img" variant="top" src={Project1} />
        <Card.Body>
          <Card.Title>Horiseon Project</Card.Title>
          <Card.Text>PR, SEO and Social Media Marketing.</Card.Text>{" "}
          <a
            href="https://pereztb02.github.io/CSS-hw-01/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary">View Project</Button>
          </a>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img className="card-img" variant="top" src={Rr} />
        <Card.Body>
          <Card.Title>First Collaborative Project</Card.Title>
          <Card.Text>
            Recipe randomizer and meal planner assistant.
          </Card.Text>{" "}
          <a
            href="https://ryansheehy0.github.io/Random_Flavors/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary">View Project</Button>
          </a>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img className="card-img" variant="top" src={Tracker} />
        <Card.Body>
          <Card.Title>Employee Tracker</Card.Title>
          <Card.Text>
            Command line app that allows the user to view and manage
            departments, employees, and roles to organize business information.
          </Card.Text>
          <a
            href="https://github.com/pereztb02/employee_tracker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary">View Github Repo</Button>
          </a>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img className="card-img" variant="top" src={Bookbinder} />
        <Card.Body>
          <Card.Title>ReadME Generator</Card.Title>
          <Card.Text>
            Command line app used to generate professional ReadMe's.
          </Card.Text>
          <a
            href="https://github.com/pereztb02/ReadMe.Now"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary">View Github Repo</Button>
          </a>
        </Card.Body>
      </Card>
    </Row>
  );
}
