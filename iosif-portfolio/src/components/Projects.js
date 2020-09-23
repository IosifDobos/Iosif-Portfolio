import React, { Component } from 'react';

import smartNurse from './assets/img/smart-nurse.png'
import resumeImg from './assets/img/iosif-portfolio.png';
import medievalGame from './assets/img/medieval-game.png';
import bookImg from './assets/img/library-website.jpeg';
import loadingImg from './assets/img/loading.png';

class Projects extends Component {

  render() {
    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

                <div className="columns portfolio-item">
                  <div className="item-wrap">

                    <a href="#modal-01" title="Smart-Nurse">
                      <img alt="Smart-Nurse" src={smartNurse} />
                      <div className="overlay">
                          <div className="portfolio-item-meta">
                        <h5>Smart-Nurse</h5>
                            <p>App build for my final year project</p>
                          </div>
                        </div>
                      <div className="link-icon"><i className="fa fa-link"></i></div>
                    </a>
                  </div>
                </div>

                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-02" title="Iosif-Portfolio">
                      <img alt="Resume" src={resumeImg} />
                      <div className="overlay">
                          <div className="portfolio-item-meta">
                        <h5>Iosif-Portfolio</h5>
                            <p>React resume website</p>
                          </div>
                        </div>
                      <div className="link-icon"><i className="fa fa-link"></i></div>
                    </a>
                  </div>
                </div>

                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-03" title="JOE Medieval Game">
                      <img alt="JOE Medieval Game" src={medievalGame} />
                      <div className="overlay">
                          <div className="portfolio-item-meta">
                        <h5>JOE Medieval Game</h5>
                            <p>3D unity game</p>
                          </div>
                        </div>
                      <div className="link-icon"><i className="fa fa-link"></i></div>
                    </a>
                  </div>
                </div>

                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-04" title="Book Reservation Website">
                      <img alt="Book Reservation Website" src={bookImg} />
                      <div className="overlay">
                          <div className="portfolio-item-meta">
                        <h5>Book Reservation Website</h5>
                            <p>A Book Reservation website using HTML, CSS and PHP</p>
                          </div>
                        </div>
                      <div className="link-icon"><i className="fa fa-link"></i></div>
                    </a>
                  </div>
                </div>

                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-05" title="Worldmap 2019-2020">
                      <img alt="Worldmap 2019-2020" src={loadingImg} />
                      <div className="overlay">
                          <div className="portfolio-item-meta">
                        <h5>Worldmap 2019-2020</h5>
                            <p>Webiste that uses map location created on django framework</p>
                          </div>
                        </div>
                      <div className="link-icon"><i className="fa fa-link"></i></div>
                    </a>
                  </div>
                </div>

            </div>
          </div>

          {/* Modal Popup */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" alt="Smart-Nurse" src={smartNurse} />

            <div className="description-box">
              <h4>Smart-Nurse</h4>
              <p>App build for my final year project</p>
                <span className="categories"><i className="fa fa-tag"></i>React-Native, Python, Firebase</span>
            </div>

              <div className="link-box">
                <a href="https://gitlab.com/IosifDobos/only-react-native" target="_blank" rel="noopener noreferrer">Details</a>
              <button className="popup-modal-dismiss">Close</button>
              </div>
          </div>

          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" alt="Iosif Portfolio" src={resumeImg} />

            <div className="description-box">
              <h4>Iosif Portfolio</h4>
              <p>Resume website created using ReactJS and NodeJS</p>
                <span className="categories"><i className="fa fa-tag"></i>ReactJS, NodeJS</span>
            </div>

              <div className="link-box">
                <a href="https://github.com/IosifDobos/Iosif-Portfolio" target="_blank" rel="noopener noreferrer">Details</a>
                <button className="popup-modal-dismiss right">Close</button>
              </div>
          </div>

          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" alt="Joe Medieval Game" src={medievalGame} />

            <div className="description-box">
              <h4>JOE Medival Game</h4>
              <p>3D unity game</p>
                <span className="categories"><i className="fa fa-tag"></i>Unity, C#</span>
            </div>

              <div className="link-box">
                <a href="https://github.com/IosifDobos/JoeMedievalGame" target="_blank" rel="noopener noreferrer">Details</a>
                <button className="popup-modal-dismiss right">Close</button>
              </div>
          </div>

          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" alt="Book Reservation Website" src={bookImg} />

            <div className="description-box">
              <h4>Book Reservation Website</h4>
              <p>A Book Reservation website using HTML, CSS and PHP</p>
                <span className="categories"><i className="fa fa-tag"></i>HTML, CSS, PHP, mySQL</span>
            </div>

              <div className="link-box">
                <a href="https://github.com/IosifDobos/Web-Development" target="_blank" rel="noopener noreferrer">Details</a>
                <button className="popup-modal-dismiss right">Close</button>
              </div>
          </div>

          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" alt="Worldmap 2019-2020" src={loadingImg} />

            <div className="description-box">
              <h4>Worldmap 2019-2020</h4>
              <p>Webiste that uses map location created on django framework</p>
                <span className="categories"><i className="fa fa-tag"></i>Python, Django, pySQL</span>
            </div>

              <div className="link-box">
                <a href="https://github.com/IosifDobos/Web-Mapping-Assignment" target="_blank" rel="noopener noreferrer">Details</a>
                <button className="popup-modal-dismiss right">Close</button>
              </div>
          </div>

        </div>
      </section>
    );
  }
}

export default Projects;