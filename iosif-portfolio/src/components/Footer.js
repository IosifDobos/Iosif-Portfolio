import React, { Component } from 'react';
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillGitlab,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillMediumSquare,
  AiFillLinkedin
} from 'react-icons/ai';

class Footer extends Component {

  render() {
    return (
      <footer>

        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li>
                <a href="http://facebook.com/bogdandobos" target="_blank" rel="noopener noreferrer">
                  <AiFillFacebook size="40" />
                </a>
              </li>
              <li>
                <a href="http://instagram.com/josephberelly" target="_blank" rel="noopener noreferrer">
                  <AiFillInstagram size="40" />
                </a>
              </li>
              <li>
                <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
                  <AiFillTwitterSquare size="40" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/iosif-dobos/" target="_blank" rel="noopener noreferrer">
                  <AiFillLinkedin size="40" />
                </a>
              </li>
              <li>
                <a href="http://github.com/IosifDobos" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub size="40" />
                </a>
              </li>
              <li>
                <a href="https://gitlab.com/IosifDobos" target="_blank" rel="noopener noreferrer">
                  <AiFillGitlab size="40" />
                </a>
              </li>
              <li>
                <a href="http://medium.com/" target="_blank" rel="noopener noreferrer">
                  <AiFillMediumSquare size="40" />
                </a>
              </li>
            </ul>

            <ul className="copyright">
              <li>&copy; Copyright 2020: Website created by Iosif Dobos. All rights are reserved!</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
            </ul>

          </div>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>

        </div>
      </footer>
    );
  }
}

export default Footer;
