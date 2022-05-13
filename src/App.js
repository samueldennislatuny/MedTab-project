import logo from "./logo.svg";
import "./App.css";
import imglogo from "./images/logo.png";
import imgdoctors from "./images/doctors.jpg";
import imgstethoscope from "./images/stethoscope.png";
import imgdoctor from "./images/doctor.png";
import imgdoctor2 from "./images/doctor2.jpeg";
import imgheartbeat from "./images/heartbeat.png";
import imgreport from "./images/report.png";
import imgpharmacy from "./images/pharmacy.jpeg";
import imgpills from "./images/pills.jpg";
import imgheartbeats from "./images/heartbeats.png";
import imgpeople from "./images/people.png";
import imgdownload from "./images/download.jpeg";
import imgdentist from "./images/dentist.jpeg";
import imgvirus from "./images/virus.jpeg";

function App() {
  document.title = "Medtab";
  return (
    <div className="App">
      <div>
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container-fluid">
            <img src={imglogo} alt="img Cardio" className="imglogo" />
            <a class="navbar-brand" href="#">
              <h4>Medtab</h4>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-itemr">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-itemr">
                  <a class="nav-link active" href="#">
                    Blog
                  </a>
                </li>
                <li class="nav-itemr">
                  <a class="nav-link active" href="#">
                    Pages
                  </a>
                </li>
                <li class="nav-itemr">
                  <a class="nav-link active" href="#">
                    Doctors
                  </a>
                </li>
                <li class="nav-itemr">
                  <a class="nav-link active" href="#">
                    Contact us
                  </a>
                </li>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button class="btn btn-outline-success" type="submit">
                  <h6>find Doctor</h6>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <img src={imgdoctors} alt="img doctors" className="imgdoctors" />
      </div>
      <div></div>

      <div class="top-container">
        <div style={{ marginTop: "200px" }}>
          <div class="welcome-text">
            <h1>Find The Best Doctor Around You</h1>
          </div>
          <div className="ButtonBox">
            <button class="button button6">Find Doctor</button>
            <button class="button button7">Read More</button>
          </div>
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
          <div></div>
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
        <div class="what-do">
          <h6>What We Do</h6>
          <h1> Our Services</h1>
        </div>

        <div style={{ marginTop: "200px" }}>
          <ul class="nav nav-pills nav-fill">
            <li class="nav-item">
              <div>
                <img
                  src={imgdownload}
                  alt="img download"
                  className="imgdownload"
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
                <img
                  src={imgdentist}
                  alt="img dentist"
                  className="imgdentist"
                />
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
                <img src={imgvirus} alt="img virus" className="imgvirus" />
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
          </ul>
        </div>
        <div></div>
      </div>

      <div></div>
    </div>
  );
}

export default App;
