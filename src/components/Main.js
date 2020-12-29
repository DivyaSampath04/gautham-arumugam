import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import './Main.css';

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
         
          <p>
           A self learned, self motivated enthusiast with 3.5 years of industry experience.
          </p>
          <p>
            Having expertise in AUTOSAR based Embedded Software Development and Software maintenance activities related to Powertrain.

          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
        
          <p>
            Oct 2019 - present.
          </p>
          <p style = {{textTransform : 'capitalize'}}>
          Senior Software Engineer - KPIT Technologies Ltd.

          </p>
          <h3>Valeo's Integrated Belt Starter Generator (IBSG)</h3>
          <ul>
            <li>
            Analysed customer issues regarding diagnostic logging failure in IBSG 
            </li>
            <li>
            Performed Unit Testing of the project C Files using IBM RTRT tool
            </li>
            <li>
             Worked in CANoe test modules for the automation of UDS test cases 
            </li>
            <li>
             Worked in Static Analysis warnings fix for C files

            </li>
          </ul>
          <p>TOOLS </p>
          <ul>
            <li>
            Unit Testing : IBM Rational Test RealTime Studio

            </li>
            <li>
            Static warnings fix : Klocworks

            </li>
            <li>
            Debugger : UDE
            </li>
            <li>
            Testing : Vector CANalyser, CANoe

            </li>
          </ul>
          {/*==============*/}
          <div className = 'line'></div>
          <p>
          Oct 2017 — Sep 2019 
          </p>
          <p style = {{textTransform : 'capitalize'}}>
          Software Engineer - KPIT Technologies Ltd.

          </p>
          <h3>Acceptance Testing Framework Development for Ford Motor Private Limited</h3>
          <ul>
            <li>
            Responsible for LIN and Memory stack
            </li>
            <li>
            Development of System Description for test cases specified by Autosar acceptance test specification using Vector PREEvision Tool.
            </li>
            <li>
             Configuration, Code generation using DaVinci Configurator Pro Tool. 
            </li>
            <li>
            Development of CAPL Script for automatic validation of test cases.

            </li>
          </ul>
          <p>TOOLS </p>
          <ul>
            <li>
            Autosar PREEvision, Davinci Configurator Pro, Davinci Developer, CANoe, EBTresos


            </li>
            <li>
            Compiler : GHS

            </li>
            <li>
            Debugger : TRACE32
            </li>
            <li>
            Microcontroller : MPC574JG

            </li>
          </ul>
          {close}
        </article>
        <article
          id="about"
          className={`${this.props.article === 'edu' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Education</h2>
          
        
          <p >Jun 2013 - Apr 2017  - R.M.D Engineering College  - Thiruvallur</p>
          <h3> BE - Electronics and Communication </h3>
          <p>
          CGPA : 8.53/10
         
          </p>
          <div className = 'line'></div>
          <p>Jun 2012 - Mar 2013  - Velammal MHSS  - Chennai</p>
          <h3>HSC </h3>
          <p>
          Percentage : 95.5

          </p>
          <div className = 'line'></div>
          <p>Jun 2010 - Apr 2011  - St.John's MHSS  - Chennai</p>
          <h3>SSLC </h3>
          <p>
          Percentage : 93.2

          </p>
          
         
          {close}
        </article>
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Accomplishments</h2>
          
          <p>May 2019</p>
          <h3> Go-Getter Award </h3>
          <p>
          Provided for successful completion of AUTOSAR LIN and Memory stack in ord-s AUTOSAR Acceptance Test ramework Development project

          </p>
          
         
          {close}
        </article>
        <article
          id="cert"
          className={`${this.props.article === 'cert' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Certifications</h2>
          
         
          <h3> Controller Area Network In-depth Analysis of CAN bus protocol</h3>
          <p>UDEMY - May 2020</p>
          <div className = 'line'></div>
          
          <h3> Start Deutsch A2</h3>
          <p>Goethe Institute - May 2020</p>
          <div className = 'line'></div>
       
          <h3> MATLAB programming for Numerical Computation</h3>
          <p>Indian Institute of Science - Oct 2017</p>
          <div className = 'line'></div>
         
          <h3>IELTS C1</h3>
          <p>British Council - Jan 2020</p>
          <div className = 'line'></div>
          
          <h3>BEC Vantage</h3>
          <p>University of Cambridge- Jan 2017</p>
          
         
          {close}
        </article>
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
         
          <div className="contact">
           <div className = 'flex'>
              <a
              
                className="icon fa-phone"
              >
              
              </a>
              <p className = 'label'>+91 9042143900</p>
            </div>
            <div className = 'flex'>
              <a
               
                className="icon fa-envelope"
              >
               
              </a>
              <p className = 'label'>gautham271095@gmail.com</p>
            </div>
            <div className = 'flex'>
              <a
                href="https://www.linkedin.com/in/gautham-arumugam-75b103102/"
                className="icon fa-linkedin"
              >
               
              </a>
              <p className = 'label'>Gautham Arumugam</p>
            </div>
            
            
            </div>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
