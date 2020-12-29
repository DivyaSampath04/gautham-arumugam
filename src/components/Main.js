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
            Performed Unit Testing of the project C Wles using IBM RTRT tool
            </li>
            <li>
             Worked in CANoe test modules for the automation of UDS test cases 
            </li>
            <li>
             Worked in Static Analysis warnings Wx for C Wles:

            </li>
          </ul>
          <p>TOOLS : </p>
          <ul>
            <li>
            Unit TestingV IBM Rational Test RealTime Studio

            </li>
            <li>
            Static warnings WxV Klocworks

            </li>
            <li>
            DebuggerV UDE
            </li>
            <li>
            TestingV 8ector CANalyser, CANoe

            </li>
          </ul>
          {/*==============*/}
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
            Development of System Description for test cases speciWed by Autosar acceptance test speciWcation using 8ector PREEvision Tool.
            </li>
            <li>
             ConWguration, Code generation using Da8inci ConWgurator Pro Tool. 
            </li>
            <li>
            Development of CAPL Script for automatic validation of test cases.

            </li>
          </ul>
          <p>TOOLS : </p>
          <ul>
            <li>
            AutosarV PREEvision, Davinci ConWgurator Pro, Da8inci Developer, CANoe, EBTresos


            </li>
            <li>
            CompilerV GHS

            </li>
            <li>
            DebuggerV TRACE32
            </li>
            <li>
            MicrocontrollerV MPC574JG

            </li>
          </ul>
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
          
          <p>Jan 2020</p>
          <h3>IELTS TEST SCORE </h3>
          <p>
          CEFR level C1 : 7.5/10

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
          
          <p>UDEMY - May 2020</p>
          <h3> Controller Area Network In-depth Analysis of CAN bus protocol</h3>
          
          <p>Goethe Institute - May 2020</p>
          <h3> Start Deutsch A2</h3>
          
          <p>Indian Institute of Science - Oct 2017</p>
          <h3> MATLAP programming for Numerical Computation</h3>
          
          <p>British Council - Jan 2020</p>
          <h3>IELTS C1</h3>
         
          <p>University of Cambridge- Jan 2017</p>
          <h3>BEC Vantage</h3>
          
         
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
              <p className = 'label'>+91 904214900</p>
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
