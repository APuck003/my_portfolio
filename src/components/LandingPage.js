import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl'

class LandingPage extends Component {
  render() {
    return (
        <div style={{width: '100%', margin: 'auto'}}>
          <Grid className="landing-grid">
            <Cell col={12}>
              
              {/*Profile Image*/}
              <img
                  src={process.env.PUBLIC_URL + '/img/headshot.png'}
                  alt="avatar"
                  className="avatar-img" />
              
              {/*Banner*/}
              <div className="banner-text">
                <h1>Full Stack Web Developer</h1>
                
                <hr />
                
                <p>Python | Django | Javascript | React | Node | Ruby | Rails | PostgreSQL | HTML/CSS</p>
                
                <div style={{display: 'flex', justifyContent: 'space-between', width: '50%', margin: 'auto'}}>
                  
                  {/*LinkedIn*/}
                  <a href="https://www.linkedin.com/in/austin-puckett-694746157/" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-linkedin" style={{color: 'white', fontSize: '5em', padding: '8px'}} aria-hidden="true" />
                  </a>
  
                  {/*GitHub*/}
                  <a href="https://github.com/APuck003" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-github-square" style={{color: 'white', fontSize: '5em', padding: '8px'}} aria-hidden="true" />
                  </a>
  
                  {/*Codepen*/}
                  <a href="https://codepen.io/APuck003/" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-codepen" style={{color: 'white', fontSize: '5em', padding: '8px'}} aria-hidden="true" />
                  </a>
                  
                </div>
                
              </div>
              
              {/*About Me Section*/}
              <div style={{color: "azure", textAlign: "left"}}>
                <h1 style={{textAlign: 'center', fontSize: '36px'}}>ABOUT ME</h1>
                <h6 className="about-me" style={{margin: 'auto', textAlign: 'left', fontSize: '25px', lineHeight: '30px'}}>
                  I am a Full-Stack Software Developer who is passionate about designing and executing front-end (Javascript/ReactJS) interfaces and back-end (Python/Django/Node.js) services to build efficient, scalable Web Applications.
                  {/*<br />*/}
                  <br />
                  <br />
                  <div style={{textAlign: 'left'}}>
                    <p style={{fontSize: 'inherit'}}>TECHNICAL STACK:</p>
                    <ul style={{fontSize: '20px', lineHeight: '35px'}}>
                      <li>Programming Languages: Python, Django, Javascript, React, Redux, Node, HTML/CSS, Ruby, Rails, Bootstrap, Git, SQL</li>
                      <li>Operating Systems: Mac OS, Linux, Windows 10</li>
                      <li>Design and IDE Tools: PyCharm, WebStorm, VS Code, Atom</li>
                      <li>ADDITIONAL: Build REST APIs using Model Driven Development, Agile, Feature Driven Development</li>
                      <li>Implementing best practices to help businesses reach their full potential.</li>
                    </ul>
                  </div>
  
                </h6>
              </div>
              
            </Cell>
          </Grid>
        </div>
    );
  }
}


export default LandingPage;
