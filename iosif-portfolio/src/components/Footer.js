import React, { Component } from 'react';

class Footer extends Component {
  
  render() {
    return (
      <footer>

        <div className="row">
          <div className="twelve columns">
              <ul className="social-links">
                <li><a href="http://facebook.com/bogdandobos"><i className="fa fa-facebook"></i></a></li>
                <li><a href="http://instagram.com/josephberelly"><i className="fa fa-instagram"></i></a></li>
                <li><a href="http://twitter.com"><i className="fa fa-twitter"></i></a></li>
                <li><a href="http://medium.com/"><i className="fa fa-medium"></i></a></li>
                <li><a href="https://www.linkedin.com/in/iosif-dobos/"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="http://github.com/IosifDobos"><i className="fa fa-github"></i></a></li>
                <li><a href="https://gitlab.com/IosifDobos"><i className="fa fa-gitlab"></i></a></li>
              </ul>

              <ul className="copyright">
                  <li>&copy; Copyright 2020: Page created by Iosif Dobos. All rights are reserved!</li>
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
