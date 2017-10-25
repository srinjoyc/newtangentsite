import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Particles from 'react-particles-js';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './index.scss'
import './index.sass'
import Portfolio from './portfolio.jsx'
import Services from './services.jsx'

class Landing extends Component {
  constructor(props) {
  super(props);
  this.state = { activeIndex: 0 };
  }

  render () {
    const logo = '/images/landing/heroImage.jpg';
    return (
        <div>
          <Grid className="hero-grid" fluid>
            <Row>
              <Col xs={12}>
                <Particles
                  params={{
                    particles: {
                      line_linked: {
                        shadow: {
                          enable: true,
                          color: "#fff",
                          blur: 5
                        }
                      }
                    }
                  }}
                  style = {{
                    'width': 100,
                    backgroundImage: `url(${logo})`
                  }}
                />
              </Col>
            </Row>
          </Grid>
          <Services />
          <Portfolio/>
        </div>
    )
  }
}

export default Landing
