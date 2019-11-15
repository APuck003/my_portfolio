import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'


class Contact extends Component {
  render() {
    return (
        <div className="contact-body">
          <Grid className="contact-grid">
            <Cell col={6}>
              <h2>Austin Puckett</h2>
              <img
                  src={process.env.PUBLIC_URL + '/img/guitarPic.jpg'}
                  alt="avatar"
                  style={{height: '250px'}}
              />
              {/*<p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorum ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>*/}
            </Cell>
            <Cell col={6}>
              <h2>Contact Me</h2>
              <hr />
              
              <div className="contact-list">
                <List>
                  <ListItem>
                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                      <i className="fa fa-phone-square" aria-hidden="true" />
                      (972) 352-8356
                    </ListItemContent>
                  </ListItem>
  
                  <ListItem>
                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                      <i className="fa fa-envelope" aria-hidden="true" />
                      austin.puckett003@gmail.com
                    </ListItemContent>
                  </ListItem>
                  
                  
                </List>
              </div>
              
            </Cell>
          </Grid>
        </div>
    );
  }
}


export default Contact;
