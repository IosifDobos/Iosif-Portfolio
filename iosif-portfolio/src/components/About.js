import React, {Component} from 'react';

import profile from '../components/assets/img/github_image.png'

class About extends Component {

    render() {
        if(this.props.data){
            var name = this.props.data.name;
            var bio = this.props.data.bio;
            var street = this.props.data.address.street;
            var city = this.props.data.address.city;
            var state = this.props.data.address.state;
            var zip = this.props.data.address.zip;
            var phone= this.props.data.phone;
            var email = this.props.data.email;
            var resumeDownload = this.props.data.resumedownload;
        }

        return(
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic"  src={profile} alt="Iosif Dobos Profile" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>

                        <p>{bio}</p>
                        <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                    <span>{name}</span><br />
                                    <span>{street}<br />
                                            {city} {state}, {zip}
                            </span><br />
                                    <span>{phone}</span><br />
                                <span>{email}</span>
                                </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
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