import logo from "./logo.svg";
import "./App.css";
import imglogo from "./images/logo.png";
import imgdoctors from "./images/doctors.jpg";
import imgcarousel2 from "./images/carousel2.jpeg";
import imgcarousel3 from "./images/carousel3.jpeg";
import imgstethoscope from "./images/stethoscope.png";
import imgdoctor from "./images/doctor.png";
import imgdoctor2 from "./images/doctor2.jpeg";
import imgheartbeat from "./images/heartbeat.png";
import imgreport from "./images/report.png";
import imgpharmacy from "./images/pharmacy.jpeg";
import imgpills from "./images/pills.jpg";
import imgphone from "./images/phone.png";
import imggps from "./images/gps.png";
import imgemails from "./images/emails.png";
import imgheartbeats from "./images/heartbeats.png";
import imgpeople from "./images/people.png";
import imgdownload from "./images/download.jpeg";
import imgdentist from "./images/dentist.jpeg";
import imgvirus from "./images/virus.jpeg";
import imgteam from "./images/team.jpeg";
import imgspace from "./images/space.jpeg";
import imgemail from "./images/email.png";
import {
  Carousel,
  ListGroup,
  Card,
  Button,
  Row,
  Col,
  Navbar,
  Nav,
  Container,
  Form,
} from "react-bootstrap";

function App() {
  document.title = "Medtab";
  return (
    <div className="App">
      <div className="navbar-med">
        <Navbar bg="info" expand="lg">
          <Container fluid>
            <img src={imglogo} alt="img Cardio" className="imglogo" />
            <Navbar.Brand href="#">MedTab</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100PX" }}
                navbarScroll
              >
                <Nav.Link href="#action1">HOME</Nav.Link>
                <Nav.Link href="#action2">BLOG</Nav.Link>
                <Nav.Link href="#action2">PAGES</Nav.Link>
                <Nav.Link href="#action2">DOCTORS</Nav.Link>
                <Nav.Link href="#action2">CONTACT US</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <input
                  class="form-control me-2"
                  type="Enter Your Email"
                  placeholder="Enter Your Email"
                  aria-label="Enter Your Email"
                ></input>
                <Button variant="outline-success">FIND A DOCTOR</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Carousel className="carousel">
          <Carousel.Item>
            <img className="imgdoctors" src={imgdoctors} alt="First slide" />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgcarousel2"
              src={imgcarousel2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgcarousel3"
              src={imgcarousel3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div class="top-container">
        <div style={{ marginTop: "-450px" }}>
          <div class="welcome-text">
            <h1>Find The Best Doctor Around You</h1>
          </div>
          <>
            <div className="ButtonBox">
              <Button variant="primary" size="sm">
                Find Doctor +
              </Button>{" "}
              <Button variant="secondary" size="sm">
                Read More
              </Button>
            </div>
          </>

          <div style={{ marginTop: "340px" }}>
            <ul class="nav nav-pills nav-fill">
              <li class="nav-item">
                <div>
                  <img
                    src={imgstethoscope}
                    alt="img stethoscope"
                    className="imgstethoscope"
                  />
                </div>
                <a class="nav-link" href="#">
                  <h4>Therapy</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    quis turpis sit amet leo porta iaculis vitae ac lectus. Nam
                    ullamcorper metus quis purus accumsan, lobortis dictum lorem
                    varius.
                  </p>
                </a>
              </li>
              <li class="nav-item">
                <div>
                  <img src={imgdoctor} alt="img doctor" className="imgdoctor" />
                </div>
                <a class="nav-link" href="#">
                  <h4>Dentistry</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    quis turpis sit amet leo porta iaculis vitae ac lectus. Nam
                    ullamcorper metus quis purus accumsan, lobortis dictum lorem
                    varius.
                  </p>
                </a>
              </li>
              <li class="nav-item">
                <div>
                  <img
                    src={imgheartbeat}
                    alt="img heartbeat"
                    className="imgheartbeat"
                  />
                </div>
                <a class="nav-link" href="#">
                  <h4>Virusology</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    quis turpis sit amet leo porta iaculis vitae ac lectus. Nam
                    ullamcorper metus quis purus accumsan, lobortis dictum lorem
                    varius.
                  </p>
                </a>
              </li>
              <li class="nav-item">
                <div>
                  <img src={imgreport} alt="img report" className="imgreport" />
                </div>
                <a class="nav-link" href="#">
                  <h4>Pharmachology</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    quis turpis sit amet leo porta iaculis vitae ac lectus. Nam
                    ullamcorper metus quis purus accumsan, lobortis dictum lorem
                    varius.
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="middle-container">
        <div>
          <img src={imgdoctor2} alt="img doctor2" className="imgdoctor2" />
        </div>
      </div>

      <div class="question-text">
        <h1>Find The Best Doctor Around You</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          turpis sit amet leo porta iaculis vitae ac lectus. Nam ullamcorper
          metus quis purus accumsan, lobortis dictum lorem varius.
        </p>
      </div>
      <div style={{ marginTop: "260px" }}>
        <ul class="nav-text nav-pills nav-fill">
          <li class="nav-items">
            <div>
              <img
                src={imgheartbeats}
                alt="img heartbeats"
                className="imgheartbeats"
              />
            </div>
            <a class="nav-links" href="#">
              <h4>Quality Control System</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis turpis sit amet leo porta iaculis vitae ac lectus.
              </p>
            </a>
          </li>
          <li class="nav-items">
            <div>
              <img src={imgpeople} alt="img people" className="imgpeople" />
            </div>
            <a class="nav-links" href="#">
              <h4>Highly Professional Staff</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis turpis sit amet leo porta iaculis vitae ac lectus.
              </p>
            </a>
          </li>
        </ul>
        <div>
          <img src={imgpills} alt="img pills" className="imgpills" />
        </div>
        <div>
          <img src={imgpharmacy} alt="img pharmacy" className="imgpharmacy" />
        </div>
        <div>
          <div className="update">
            <ListGroup
              horizontal
              style={{
                width: 1100,
                height: 110,
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
              }}
            >
              <ListGroup.Item style={{ position: "relative" }}>
                <h1>340+</h1>
                <h6>Costumers</h6>
              </ListGroup.Item>
              <ListGroup.Item style={{ position: "relative" }}>
                <h1>120+</h1>
                <h6>Years Practical Experience</h6>
              </ListGroup.Item>
              <ListGroup.Item style={{ position: "relative" }}>
                <h1>120+</h1>
                <h6>Members</h6>
              </ListGroup.Item>
              <ListGroup.Item style={{ position: "relative" }}>
                <h1>80+</h1>
                <h6>Costumers</h6>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>

        <div class="what-do">
          <h6>What We Do</h6>
          <h1> Our Services</h1>
        </div>
        <div
          style={{
            marginTop: "200px",
            justifyContent: "space-evenly",
            display: "flex",
          }}
        >
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={imgdownload} className="imgdentist" />
            <Card.Body>
              <Card.Title>Therapy</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Read More </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={imgdentist} className="imgdentist" />
            <Card.Body>
              <Card.Title>Dentistry</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Read More </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" img src={imgvirus} className="imgdentist" />
            <Card.Body>
              <Card.Title>Virusology</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Read More </Button>
            </Card.Body>
          </Card>
        </div>

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div style={{ margin: "100px" }}>
            <Card style={{ width: "400px", height: "250px" }}>
              <Card.Body className="Card">
                <Card.Subtitle className="mb-2 text-muted">
                  <img src={imgemail} alt="img email" className="imgemail" />
                  Subscribe Our Email For Newsletter
                </Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  quis turpis sit amet leo porta iaculis vitae ac lectus.
                </Card.Text>
                <form class="d-flex">
                  <input
                    class="form-control me-2"
                    type="Enter Your Email"
                    placeholder="Enter Your Email"
                    aria-label="Enter Your Email"
                  ></input>
                  <button class="btn btn-outline-success" type="submit">
                    <h6>SUBSCRIBE</h6>
                  </button>
                </form>
              </Card.Body>
            </Card>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "400px",
              height: "150px",
              margin: "100px",
            }}
          >
            <Row xs={1} md={2} className="rows">
              <Col>
                <Card>
                  <Card.Img variant="top" src={imgcarousel3} />
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src={imgcarousel2} />
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src={imgcarousel3} />
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src={imgcarousel3} />
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div>
        <img src={imgteam} alt="img team" className="imgteam" />
      </div>

      <div class="creative-team">
        <p>Meet Our Team</p>
        <h1>Our Creative Team</h1>
      </div>

      <div
        style={{
          marginTop: "100px",
          justifyContent: "space-evenly",
          display: "flex",
        }}
      >
        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src={imgdownload} className="imgdentist" />
          <Card.Body>
            <Card.Title>Therapy</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Read More </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src={imgdentist} className="imgdentist" />
          <Card.Body>
            <Card.Title>Dentistry</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Read More </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" img src={imgvirus} className="imgdentist" />
          <Card.Body>
            <Card.Title>Virusology</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Read More </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" img src={imgvirus} className="imgdentist" />
          <Card.Body>
            <Card.Title>Virusology</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Read More </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" img src={imgvirus} className="imgdentist" />
          <Card.Body>
            <Card.Title>Virusology</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Read More </Button>
          </Card.Body>
        </Card>
      </div>

      <div class="latest-news">
        <p>Latest News</p>
        <h1>Our Insights & Articles</h1>
      </div>

      <div
        style={{
          marginTop: "100px",
          justifyContent: "space-evenly",
          display: "flex",
        }}
      >
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={imgdownload} className="imgdentist" />
          <Card.Body>
            <Card.Text>CHISTINE HILL</Card.Text>
            <Card.Title>Every Next Level Of Your Life Will Demand</Card.Title>
            <Button variant="primary">Read More </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={imgdentist} className="imgdentist" />
          <Card.Body>
            <Card.Text>CHISTINE HILL</Card.Text>
            <Card.Title>Every Next Level Of Your Life Will Demand</Card.Title>
            <Button variant="primary">Read More </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" img src={imgvirus} className="imgdentist" />
          <Card.Body>
            <Card.Text>CHISTINE HILL</Card.Text>
            <Card.Title>Every Next Level Of Your Life Will Demand</Card.Title>
            <Button variant="primary">Read More </Button>
          </Card.Body>
        </Card>
      </div>

      <div class="latest-news">
        <p>Client Testimonials</p>
        <h1>What Our Clients say</h1>
      </div>

      <div
        style={{
          marginTop: "100px",
          justifyContent: "space-evenly",
          display: "flex",
        }}
      >
        <Card style={{ width: "20rem", textAlign: "center" }}>
          <Card.Img variant="top" src={imgdownload} className="imgdentist" />
          <Card.Body>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              turpis sit amet leo porta iaculis vitae ac lectus. Nam ullamcorper
              metus quis purus accumsan, lobortis dictum lorem varius.
            </Card.Text>
            <Card.Title>Philip Mendez</Card.Title>
            <Card.Text>Consectetur</Card.Text>
            <Button variant="primary">Read More </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem", textAlign: "center" }}>
          <Card.Img variant="top" src={imgdentist} className="imgdentist" />
          <Card.Body>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              turpis sit amet leo porta iaculis vitae ac lectus. Nam ullamcorper
              metus quis purus accumsan, lobortis dictum lorem varius.
            </Card.Text>
            <Card.Title>Kelly Coleman</Card.Title>
            <Card.Text>Nulla Nec</Card.Text>
            <Button variant="primary">Read More </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem", textAlign: "center" }}>
          <Card.Img variant="top" img src={imgvirus} className="imgdentist" />
          <Card.Body>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              turpis sit amet leo porta iaculis vitae ac lectus. Nam ullamcorper
              metus quis purus accumsan, lobortis dictum lorem varius.
            </Card.Text>
            <Card.Title>Eugene Freeman</Card.Title>
            <Card.Text>Tincidunt</Card.Text>
            <Button variant="primary">Read More </Button>
          </Card.Body>
        </Card>
      </div>

      <div
        style={{
          marginTop: "100px",
          justifyContent: "space-evenly",
          display: "flex",
        }}
      >
        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" img src={imgvirus} className="imgdentist" />
        </Card>

        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" img src={imgvirus} className="imgdentist" />
        </Card>

        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" img src={imgvirus} className="imgdentist" />
        </Card>

        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" img src={imgvirus} className="imgdentist" />
        </Card>

        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" img src={imgvirus} className="imgdentist" />
        </Card>
      </div>

      <div className="bio">
        <ListGroup
          horizontal
          style={{
            width: 1100,
            height: 110,
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div>
            <img src={imggps} alt="img gps" className="imggps" />
          </div>
          <ListGroup.Item style={{ position: "relative" }}>
            <h6>Our Address</h6>
            <h6>Drive Chicago, IL 60607</h6>
          </ListGroup.Item>
          <div>
            <img src={imgphone} alt="img gps" className="imggps" />
          </div>
          <ListGroup.Item style={{ position: "relative" }}>
            <h6>Call Us</h6>
            <h6>360-779-2228</h6>
          </ListGroup.Item>
          <div>
            <img src={imgemails} alt="img gps" className="imggps" />
          </div>
          <ListGroup.Item style={{ position: "relative" }}>
            <h6>Our Mail</h6>
            <h6>Yourname@gmail.com</h6>
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div></div>
    </div>
  );
}

export default App;
