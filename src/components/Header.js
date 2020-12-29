import PropTypes from 'prop-types'
import React from 'react'
import Capture from "../images/Capture.png";

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon">
           <img src = {Capture} style = {{width : '100%',height : '100%',borderRadius : '50%'}}/>
      </span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Gautham Arumugam</h1>
        <h3> Embedded Software Engineer</h3>
        <p>
         Chennai, India
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('edu')
            }}
          >
            Education
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Accomplishments
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('cert')
            }}
          >
            Certifications
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
