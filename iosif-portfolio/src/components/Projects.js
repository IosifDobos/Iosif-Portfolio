import React, { Component } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
// import { FaTag } from 'react-icons/fa'

import smImg from '../assets/img/IMG_0004.jpeg';
import resumeImg from '../assets/img/IMG_0009.jpeg';
import medievalGame from '../assets/img/medieval-game.png';
import bookImg from '../assets/img/library-website.jpeg';
import wmapImg from '../assets/img/IMG_0001.jpg';
import githubImg from '../assets/img/IMG_0011.jpeg';
import vintageImg from '../assets/img/IMG_0012.jpeg'
import strapiImg from '../assets/img/strapi-backend.png';


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
                    <img alt="Smart-Nurse" src={smImg} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Smart-Nurse</h5>
                        <p>App build for my final year project</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="fa fa-link"></i>
                    </div>
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
                  <a href="#modal-06" title="Github Users">
                    <img alt="Github Users" src={githubImg} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Search github users</h5>
                        <p>Website that search for github users</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="fa fa-link"></i></div>
                  </a>
                </div>
              </div>

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-07" title="Vintage Tesch Shop">
                    <img alt="Vintage Tech" src={vintageImg} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Vintage Tech Shop</h5>
                        <p>Website that sells vintage products</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="fa fa-link"></i></div>
                  </a>
                </div>
              </div>

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-08" title="Vintage Tech Backend">
                    <img alt="Strapi backend" src={strapiImg} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Vintage Tech Strapi Backend</h5>
                        <p>Backend server for Vintage Tech app</p>
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
                    <img alt="Worldmap 2019-2020" src={wmapImg} />
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
            <img className="scale-with-grid" alt="Smart-Nurse" src={smImg} />

            <div className="description-box">
              <h4>Smart-Nurse</h4>
              <p>App build for my final year project</p>
              <span className="categories">
                <i className="fa fa-tag"></i>React-Native, Python, Firebase</span>
            </div>

            <div className="link-box">
              <button className="btn btn-primary">
                <a href="https://gitlab.com/IosifDobos/only-react-native" target="_blank" rel="noopener noreferrer">Details</a>
              </button>
              <AiFillCloseCircle size="25" className="popup-modal-dismiss btn-close" />
            </div>
          </div>

          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" alt="Iosif Portfolio" src={resumeImg} />

            <div className="description-box">
              <h4>Iosif Portfolio</h4>
              <p>Personal resume website created using ReactJS</p>
              <span className="categories"><i className="fa fa-tag"></i>ReactJS</span>
            </div>

            <div className="link-box">
              <a href="https://github.com/IosifDobos/Iosif-Portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Details
              </a>
              {/* <a className="popup-modal-dismiss">Close</a> */}
              <AiFillCloseCircle size="25" className="popup-modal-dismiss btn-close" />
            </div>
          </div>

          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" alt="Joe Medieval Game" src={medievalGame} />

            <div className="description-box">
              <h4>JOE Medival Game</h4>
              <p>3D unity game created for OOP module year 2</p>
              <span className="categories"><i className="fa fa-tag"></i>Unity, C#</span>
            </div>

            <div className="link-box">
              <a href="https://github.com/IosifDobos/JoeMedievalGame" target="_blank" rel="noopener noreferrer">Details</a>
              {/* <a className="popup-modal-dismiss">Close</a> */}
              <AiFillCloseCircle size="25" className="popup-modal-dismiss btn-close" />
            </div>
          </div>

          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" alt="Book Reservation Website" src={bookImg} />

            <div className="description-box">
              <h4>Book Reservation Website</h4>
              <p>
                A Book Reservation website create for Web Developent module in year 2 during college.
                The website was created using HTML, CSS and PHP programming language.
                And XAMP server was used to store and get the data
                </p>
              <span className="categories"><i className="fa fa-tag"></i>HTML, CSS, PHP, mySQL</span>
            </div>

            <div className="link-box">
              <a href="https://github.com/IosifDobos/Web-Development" target="_blank" rel="noopener noreferrer">Details</a>
              {/* <a className="popup-modal-dismiss">Close</a> */}
              <AiFillCloseCircle size="25" className="popup-modal-dismiss btn-close" />
            </div>
          </div>

          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" alt="Worldmap 2019-2020" src={wmapImg} />

            <div className="description-box">
              <h4>Worldmap 2019-2020</h4>
              <p>Webiste that uses map location created on django framework</p>
              <span className="categories"><i className="fa fa-tag"></i>Python, Django, pySQL</span>
            </div>

            <div className="link-box">
              <a href="https://github.com/IosifDobos/Web-Mapping-Assignment" target="_blank" rel="noopener noreferrer">Details</a>
              {/* <a className="popup-modal-dismiss">Close</a> */}
              <AiFillCloseCircle size="25" className="popup-modal-dismiss btn-close" />
            </div>
          </div>

          <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" alt="React Github Users" src={githubImg} />

            <div className="description-box">
              <h4>Search Github Users</h4>
              <p>React application that search for github users</p>
              <span className="categories"><i className="fa fa-tag"></i>React, Netlify</span>
            </div>

            <div className="link-box">
              <a
                href="https://github.com/IosifDobos/react-search-github-users"
                target="_blank"
                rel="noopener noreferrer">Details</a>
              <a
                type="button"
                className="btn button resume-btn"
                href="https://github-users-react.netlify.app/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Website
              </a>
              <AiFillCloseCircle size="25" className="popup-modal-dismiss btn-close" />
            </div>
          </div>

          <div id="modal-07" className="popup-modal mfp-hide">
            <img className="scale-with-grid" alt="React Github Users" src={vintageImg} />

            <div className="description-box">
              <h4>Vintage Tech shop</h4>
              <p>
                Vintage Tech e-commerce application that sales vintage items such as phone, computers and radios.
                Project created using React. Also, stripe backend server was created and deployed to heroku.
                For payments functionality strapi was used to handle the user payments.
              </p>
              <span className="categories">
                <i className="fa fa-tag"></i>React, Netlify, Heroku, Strapi, Stripe
                </span>
            </div>
            <div className="link-box">
              <a
                type="button"
                className="btn button"
                href="https://github.com/IosifDobos/e-commerce-react"
                target="_blank"
                rel="noopener noreferrer"> View Project</a>
              <a
                type="button"
                className="btn button resume-btn"
                href="https://joe-fashion-app.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Website
              </a>
              <AiFillCloseCircle size="25" className="popup-modal-dismiss btn-close" />
            </div>
          </div>

          <div id="modal-08" className="popup-modal mfp-hide">
            <img className="scale-with-grid" alt="Strapi Backend" src={strapiImg} />

            <div className="description-box">
              <h4>Vintege Tech Server</h4>
              <p>
                Vintage Tech e-commerce application backend server using strapi to store user informations
                to manage products and orders that user are placing. Also stripe functionality is included
                for user payments.
                The app was deployed to heroku.
              </p>
              <span className="categories">
                <i className="fa fa-tag"></i>JavaScript, Heroku, Stripe
                </span>
            </div>
            <div className="link-box">
              <a
                type="button"
                className="btn button"
                href="https://github.com/IosifDobos/store-api-backend"
                target="_blank"
                rel="noopener noreferrer"> View Project</a>
              <a
                type="button"
                className="btn button resume-btn"
                href="https://store-api-backend.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Website
              </a>
              <AiFillCloseCircle size="25" className="popup-modal-dismiss btn-close" />
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default Projects;