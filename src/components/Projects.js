import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl'

class Projects extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = { activeTab: 0 }
    
  }
  
  toggleCategories = () => {
    if (this.state.activeTab === 0) {
      return (
          <div className="projects-grid">
            
            {/* Python Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <img src={process.env.PUBLIC_URL + '/img/Python-Programming-wallpaper_8.jpg'} style={{width: '332px', height: 'auto', objectFit: 'contain'}} alt="python" />
              {/*<CardTitle style={{color: '#FFF', height: '176px'}}>*/}
              
              {/*</CardTitle>*/}
              <CardText>
                Interactive Dictionary Command Line Application made using Python
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://github.com/APuck003/Interactive-Dictionary" target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
  
            {/* Python Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <img src={process.env.PUBLIC_URL + '/img/rubiks.png'} style={{width: '349px', height: 'auto', objectFit: 'contain'}} alt="python" />
              {/*<CardTitle style={{color: '#FFF', height: '176px'}}>*/}
              {/*  */}
              {/*</CardTitle>*/}
              <CardText>
                Three Dimensional Rubik's Cube GUI App
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://github.com/APuck003/Rubiks-Cube-GUI" target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            {/* Python Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <img src={process.env.PUBLIC_URL + '/img/Python-Programming-wallpaper_8.jpg'} style={{width: '332px', height: 'auto', objectFit: 'contain'}} alt="python" />
              {/*<CardTitle style={{color: '#FFF', height: '176px'}}>*/}
    
              {/*</CardTitle>*/}
              <CardText>
                Karplus-Strong Musical Algorithm that plays random notes to create melody
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://github.com/APuck003/karplus-strong-music-notes" target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            
          </div>
          
      )
    } else if (this.state.activeTab === 1) {
      return (
          <div className="projects-grid-2">
            
            {/* Django Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <img src={process.env.PUBLIC_URL + '/img/Guithub-logo.png'} style={{width: '332px', height: 'auto', objectFit: 'contain'}} alt="django" />
              
              {/*<CardTitle style={{color: '#FFF', height: '176px'}}>*/}
              {/*</CardTitle>*/}
              <CardText>
                <strong>GuitHub</strong>: Web Application using Django/React to help people to teach themselves to play guitar.
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://github.com/APuck003/GuitHub" target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
  
            {/* Django Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <img src={process.env.PUBLIC_URL + '/img/IDS.png'} style={{width: '332px', height: 'auto', objectFit: 'contain'}} alt="django" />
              
              <CardTitle style={{color: '#FFF', height: 'auto'}}>
              </CardTitle>
              <CardText>
                Website built using Django and Javascript for an Industrial Waste Management Company in Texas
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://github.com/APuck003/IDS_Django_Project" target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            
          </div>
          
          
      )
    } else if (this.state.activeTab === 2) {
      return (
          <div className="projects-grid-3">
            
            {/*Javascript Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#FFF', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*H-25KB7EbSHjv70HXrdl6w.png) center / cover'}}>
              </CardTitle>
              <CardText>
                Apples-to-Apples inspired game.
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://github.com/APuck003/babbles-to-babbles-frontend" target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            
            {/* Javascript Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#FFF', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*H-25KB7EbSHjv70HXrdl6w.png) center / cover'}}>
              </CardTitle>
              <CardText>
                Photography Portfolio Page Project
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://codepen.io/APuck003/pen/MmKNwO" target="_blank" rel="noopener noreferrer">CodePen</a>
                </Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
  
            
            {/* Javascript Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#FFF', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*H-25KB7EbSHjv70HXrdl6w.png) center / cover'}}>
              </CardTitle>
              <CardText>
                Simple Javascript Clock
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://codepen.io/APuck003/pen/LaobRj" target="_blank" rel="noopener noreferrer">CodePen</a>
                </Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            
          </div>
      )
    } else if (this.state.activeTab === 3) {
      return (
          <div>
            {/* React Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <img src={process.env.PUBLIC_URL + '/img/e-commerce.png'} style={{width: '332px', height: 'auto', objectFit: 'contain'}} alt="django" />
              
              <CardTitle style={{color: '#FFF', height: 'auto'}}>
              </CardTitle>
              <CardText>
                E-Commerce style project built using React.js to display as functioning application
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://priceless-blackwell-8d335b.netlify.com/" target="_blank" rel="noopener noreferrer">View the App</a>
                </Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
      )
    }
  }
  
  render() {
    return (
        <div className="category-tabs">
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
            <Tab>Python</Tab>
            <Tab>Django</Tab>
            <Tab>Javascript</Tab>
            <Tab>React</Tab>
          </Tabs>
          
          <Grid>
            <Cell col={12}>
              <div className="content">
                {this.toggleCategories()}
              </div>
            </Cell>
          </Grid>
          
        </div>
    );
  }
}


export default Projects;
