import React, {Component} from 'react';

import profile from '../components/assets/img/github_image.png'

class About extends Component {

    render() {
        return(
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic"  src={profile} alt="Iosif Dobos Profile" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>

                        <p>
                            I'm a graduate student at Technology University Dublin with a degree in Computer Science. 
                            I have pursue my internship at Revenue where I have been involved in three internal 
                            projects working with programming languages such as AngularJS, jQuery and Java and Jenkins 
                            to test and deploy the applications. I love to learn and explore new technologies and often 
                            amazed by how technology has grown in the recent years.
                        </p>
                        <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                    <span>Iosif B. Dobos</span><br />
                                    <span>Cedarwood Rise<br />
                                            Glasnevin, Dublin 11
                            </span><br />
                                    <span>+353894199006</span><br />
                                <span>iosifdobos22@gmail.com</span>
                                </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href="#" className="button"><i className="fa fa-download"></i>Download Resume</a>
                            </p>
                        </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container-fluid padding">
                    <div className="row welcome text-center">
                        <div className="col-12">
                            <h1 className="display-4 white-color">What I do?</h1>
                            <h4 className="display-4 white-color">Here are some of my expertise</h4>
                        </div>
                        <hr></hr>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="four columns">
                        <div className="">
                            <i className="fa fa-code"></i>
                            <h3 className="white-color">Web Development</h3>
                            <p>
                                I have experience building websites using JavaScript, Angular, React, HTML, CSS as frontend and
                                Java, Python, Flask, Django, Jenkis and Apache Tomcat as backend to deploy the applications.
                            </p>
                        </div>
                    </div>
                    <div className="four columns">
                        <div className="">
                            <i className="fa fa-bold"></i>
                            <h3 className="white-color">Algorithms & Data Structures</h3>
                            <p>As part of the Computer Science degree, I have good background over fundamental concepts of DSA</p>
                        </div>
                    </div>
                    <div className="four columns">
                        <div className="">
                            <i className="fa fa-css3"></i>
                            <h3 className="white-color">Dev Ops</h3>
                            <p>
                                I have pursued my internship at Revenue, being involved in a DevOps team working with tools like Jenkins and Doker
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}
export default About;