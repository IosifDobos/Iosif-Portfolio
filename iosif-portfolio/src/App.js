import React, {Component} from 'react';
import ReactGA from 'react-ga';
import './App.css';
import $ from 'jquery';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render(){
      return (
        <div className="App">
            <Home data={this.state.resumeData.main} />
            <About data={this.state.resumeData.main}/>
            <Resume data={this.state.resumeData.resume}/>
            <Projects data={this.state.resumeData.portfolio}/>
            <Testimonials data={this.state.resumeData.testimonials}/>
            <Contact data={this.state.resumeData.main}/>
            {/* <Profile /> */}
            <Footer data={this.state.resumeData.main}/>
        </div>
      );
  }
  
}
export default App;
