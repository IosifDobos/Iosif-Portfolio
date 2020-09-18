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
                    <a href="https://gitlab.com/IosifDobos/only-react-native" title="Smart-Nurse">
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
                    <a href="https://github.com/IosifDobos/Iosif-Portfolio" title="Iosif-Portfolio">
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
                    <a href="https://github.com/IosifDobos/JoeMedievalGame" title="JOE Medieval Game">
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
                    <a href="https://github.com/IosifDobos/Web-Development" title="Book Reservation Website">
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
                    <a href="https://github.com/IosifDobos/Web-Development" title="Worldmap 2019-2020">
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
        </div>
      </section>
    );
  }
}

export default Projects;