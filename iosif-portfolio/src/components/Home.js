import React, {Component} from 'react';

class Home extends Component{

    render(){

        // if(this.props.data){
        // //     var name = this.props.data.name;
        // //     var occupation= this.props.data.occupation;
        // //     var description= this.props.data.description;
        // //     var city= this.props.data.address.city;
        //     var networks= this.props.data.social.map(function(network){
        //       return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
        //     })
        // }
        
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
                            I'm a <span>Dublin</span> based <span>Software Developer</span>. I'm a graduate student at Technology University Dublin
                            with a degree in Computer Science. I love to build things and discover new technologies.
                            As part of my degree I have built numerous projects which can be found on Projects section
                            by clicking on the button bellow or by visiting my GitHub page. Also, for more information about my work experience,
                            kills and education, click on the Resume button bellow.
                        </h3>
                        <hr />
                        <ul className="social">
                            {/* {networks} */}
                        </ul>
                        <hr />
                        {/* <div className="btn-toolbar">
                                <button type="button" className="btn btn-lg btn-primary btn-sm btn-space white-color">
                                    <a href="#portfolio" className="white-color">View Projects</a>
                                </button>
                                 <button type="button" className="btn btn-lg btn-primary btn-sm btn-space"> 
                                    <a href="#resume">View Resume</a>
                                </button>
                        </div> */}
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