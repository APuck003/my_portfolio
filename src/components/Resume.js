import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
  
  render() {
    return (
        <div>
          <Grid>
            <Cell col={4}>
              <div style={{textAlign: 'center'}}>
                <img
                    src={process.env.PUBLIC_URL + '/img/headshot.png'}
                    alt="resume-pic"
                    style={{
                  boxSizing: 'border-box',
                  width: '100%',
                  paddingTop: '2em',
                  borderRadius: '50%'
                    }} />
              </div>
              <h2>Austin Puckett</h2>
              <h4 style={{color: 'grey'}}>Software Developer</h4>
              <hr style={{borderTop: '3px solid #833fb2', width: '212px'}}/>
              
              <p style={{width: '350px'}}>
                Full-Stack Software Developer who is passionate about designing and executing front-end (Javascript/ReactJS) interfaces and back-end (Python/Django/Node.js) services to build efficient, scalable Web Applications.<br/>
              </p>
              <p style={{width: '350px'}}>
                TECHNICAL STACK:<br/>
                - Programming Languages: Python, Django, Javascript, React, Redux, JQuery, HTML/CSS, Ruby, Rails, Bootstrap, Git, SQL<br/>
                - Operating Systems: Mac OS, Linux, Windows 10<br/>
                - Design and IDE Tools: PyCharm, WebStorm, VS Code, Atom<br/>
              </p>
              <p style={{width: '350px'}}>
                ADDITIONAL:<br/>
                - Build REST APIs using Model Driven Development, Agile, Feature Driven Development<br/>
                - Implementing best practices to help businesses reach their full potential.
              </p>
              
              <hr style={{borderTop: '3px solid #833fb2', width: '212px'}}/>
              
              <h5>Address</h5>
              <p>Dallas, TX</p>
              
              <h5>Phone</h5>
              <p>(972) 352-8356</p>
              
              <h5>Email</h5>
              <p>austin.puckett003@gmail.com</p>
              
              <hr style={{borderTop: '3px solid #833fb2', width: '212px'}}/>
            </Cell>
            <Cell className="resume-right-col" col={8} >
              <h2>Experience</h2>
              
              <Experience
                  startYear={2017}
                  endYear={'Present'}
                  jobName='Full Stack Developer'
                  jobDescription={
                    <ul>
                      <li>
                        Design and execute front-end interfaces and back-end services to build Web Applications
                      </li>
                      <li>
                        Build and test REST APIs using model-driven development and modern testing frameworks
                      </li>
                      <li>
                        Write code that follows standards and adheres to best practices
                      </li>
                    </ul>
                  }
              />
              
              <Experience
                  startYear={2015}
                  endYear={2017}
                  jobName='Physical Therapy Clinic Practice Manager'
                  jobDescription={
                    <ul>
                      <li>
                        Cut costs by overseeing all billing and collections information
                      </li>
                      <li>
                        Saved the company money by removing 3rd party marketing firm and overseeing marketing myself
                      </li>
                      <li>
                        Scrutinized statements, EOBs and insurance verifications to assure payments match up to treatment provided
                      </li>
                    </ul>
                  }
              />
              <hr style={{borderTop: '3px solid #833fb2'}}/>
              
              <h2>Skills</h2>
              
              <Skills
                  skill='Python'
                  progress={100}
              />
  
              <Skills
                  skill='Django'
                  progress={100}
              />
  
              <Skills
                  skill='Javascript'
                  progress={100}
              />
  
              <Skills
                  skill='jQuery'
                  progress={60}
              />
  
              <Skills
                  skill='React'
                  progress={100}
              />
  
              <Skills
                  skill='Node'
                  progress={70}
              />
  
              <Skills
                  skill='SQL'
                  progress={100}
              />
  
              <Skills
                  skill='Ruby'
                  progress={80}
              />
  
              <Skills
                  skill='Rails'
                  progress={70}
              />
  
              <hr style={{borderTop: '3px solid #833fb2'}}/>
              
              <Education
                startYear={2018}
                endYear={2019}
                schoolName='Flatiron School'
                schoolDescription='Full Stack Software Engineer Certification (525 Hours)'
              />
  
              <Education
                  startYear={2013}
                  endYear={2016}
                  schoolName='Louisiana State University'
                  schoolDescription='90+ Hours Towards DPT Degree'
              />
              
            </Cell>
          </Grid>
        </div>
    );
  }
}


export default Resume;
