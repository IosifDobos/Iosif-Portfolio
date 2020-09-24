import React, { Component } from 'react';

class Resume extends Component {

  render() {
    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
              <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <div>
                    <h3>Technology University Dublin</h3>
                    <p className="info">BSc in Computer Science <span>&bull;</span><em className="date">September 2020</em></p>
                    {/* <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p> */}
                  </div>
                  <div>
                    <h3>Access Foundation Programme TUD</h3>
                    <p className="info">Special Purpose Award Level 6 <span>&bull;</span><em className="date">September 2016</em></p>
                    {/* <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p> */}
                  </div>
                  <div>
                    <h3>Technical College 'Petru Poni' Roman, Romania</h3>
                    <p className="info">Bacalaureate Diploma <span>&bull;</span><em className="date">June 2011</em></p>
                    {/* <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p> */}
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div className="row work">

          <div className="three columns header-col">
              <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div>
              <h3>Intern at Revenue</h3>
              <p className="info">Software Developer<span>&bull;</span> <em className="date">February - August 2019</em></p>
              <p>
                Being involved in multiple projects where AngularJS, JavaScript and jQuery programming language was used 
                to developed the frontend, Java Spring boot to manage the backend where the applications was tested and 
                deployed in Jenkins. Engaged in all phases of the software development lifecycle which include gathering 
                business system requirements. Participated in weekly meeting discussing the stage of the projects and 
                planning future work. Testing and debug applications to meet business needs and interacting with the third 
                party partners in the achievement of business initiatives.
              </p>
            </div>
            <div>
              <h3>IDM Construction LTD</h3>
              <p className="info">Arnotts Maintenance<span>&bull;</span> <em className="date">January 2016 - Present / Part-time</em></p>
              <p>
                Comply with the company plans and vision and working at my best to achieve the goals. 
                Working under time pressure as every job had to be finished before shop opens to give customers the 
                comfort while shopping.
              </p>
            </div>
            <div>
              <h3>Adrian Iacob Dry Wall LTD - Dublin</h3>
              <p className="info">Supervisor<span>&bull;</span> <em className="date">Summer 2015 / Part-time</em></p>
              <p>
                Set goals for performance and deadlines in ways that comply with the company plan and vision. 
                Organizing workflow and ensuring that employees understand their duties or delegated tasks. 
                Monitoring employee productivity and providing constructive feedback and coaching.
              </p>
            </div>
            <div>
              <h3>Professional Footbal Player</h3>
              <p className="info">Left Middfielder<span>&bull;</span> <em className="date">2011 - 2012 FC Bohemians, 2012 - 2013 FC Glasnevin, 2013 - Ongoing FC Real Transilvania</em></p>
              <p>
                Taking part in many competitions as part of the club, and training hard to improve my skills and ability. 
                Adapted to the high pressure, extremely competitive environment, and collaborated with team members to achieve team goals.
              </p>
            </div>
            <div>
              <h3>Summer Together Project, Roman, Romania</h3>
              <p className="info">Mentor<span>&bull;</span> <em className="date">2009 - 2010, 2010 - 2011</em></p>
              <p>
                The Project’s goal was to provide favourable conditions for children to learn more and to behave better 
                during summer holiday, included a program of education, culture and arts, set up especially for children 
                with lower financial status. The main responsibility looking after group of children between six and fifteen 
                years of age, researching for a variety of children games and other activities. During mentoring time, helped 
                children to communicate with each other and discover the professional universe they dream of.
              </p>
            </div>
          </div>
        </div>



        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">
              <p>
                Passionate about sport. Member of FC Real Transilvania soccer team. Take part in soccer competitions. 
                Enjoy other sports including ping pong, tennis and snooker.
              </p>

            <div className="bars">
              <ul className="skills">
                <li ><span style={{width: '90%'}} className="bar-expand"></span><em>Git</em></li>
                <li ><span style={{width: '80%'}} className="bar-expand"></span><em>React</em></li>
                <li ><span style={{width: '90%'}} className="bar-expand"></span><em>CSS</em></li>
                <li ><span style={{width: '75%'}} className="bar-expand"></span><em>HTML 5</em></li>
                <li ><span style={{width: '80%'}} className="bar-expand"></span><em>Java</em></li>
                <li ><span style={{width: '80%'}} className="bar-expand"></span><em>MongoDB</em></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
