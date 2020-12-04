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

class Home extends Component {
    render() {
        return (
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
                        <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                        <li><a className="smoothscroll" href="#profile">Profile</a></li>
                    </ul>
                </nav>
                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">I'm Iosif B. Dobos.</h1>
                        <h3>
                            I'm a <span>Dublin</span> based <span>Software Developer</span>. I'm a graduate student at Technological University Dublin
                            with a degree in Computer Science. I love to build things and discover new technologies.
                            As part of my degree I have built numerous projects which can be found on Projects section
                            by clicking on the button bellow or by visiting my GitHub page. Also, for more information about my work experience,
                            kills and education, click on the Resume button bellow.
                        </h3>
                        <hr />
                        <ul className="social">
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
                        <hr />
                        <ul className="social" >
                            <a href="#portfolio" className="button btn github-btn">
                                <i className="fa fa-github"></i>
                                View Projects
                            </a>
                            <a href="#resume" type="button" className="button btn project-btn">
                                <i className="fa fa-book"></i>
                                My Resume
                            </a>
                        </ul>
                    </div>

                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>
            </header>
        )
    }
}
export default Home;