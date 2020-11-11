//React Imports
import React, {Component, Suspense} from "react";

import './App.css';
import './main.scss';
import './loader.css';

//General Style Imports
import {TelegramIcon, TwitterIcon} from "react-share";

/* ELEMENTS IMPORTS */
import bucc from './bucc2.png';
import triangles from './firstvideo.mp4';
import coinVideo from './secondvideo.mp4';
import cube from './thirdvideo2.mp4';

/* BOOTSTRAP IMPORTS */
//Elements
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
//Layouts
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.setupLoader = this.setupLoader.bind(this);
    this.state = {
      loader: true,
      percentageLoader: "0%",
      visibility: "visible",
      loaderCSS: "loaderCoverSheet",
    }
    document.body.style.overflowY = "hidden";
  }

        componentDidMount = async () => {
        this.setupLoader();
        }

        setupLoader = async () => {
        var that = this;
        setTimeout(function(){that.setState({percentageLoader: "20%"})}, 1000);
        setTimeout(function(){that.setState({percentageLoader: "50%"})}, 2000);
        setTimeout(function(){that.setState({percentageLoader: "85%", loaderCSS: "loaderCoverSheet2"});
        document.body.style.overflowY = "scroll";}, 2800);
        setTimeout(function(){that.setState({loader: false});}, 3000);
     
        }

  render () {
  return (
    <>

    <Container fluid className={this.state.bodyLoaderCSS}>
      <Row>
      <Col md={12}>
      <Container>
          <Navbar className="justify-content-between" bg="blackbg">
          <Form>
          <Navbar.Brand href="#home">
          <Container>
                        <img
                        alt=""
                        src="./buccgif2.gif"
                        className="d-inline-block align-top imageSize" />
                        <h3 className="headlineFont">Buccaneer V2</h3>
          </Container>
          </Navbar.Brand>
          </Form>
          <Form>
          <Container>
            <TelegramIcon className="shareButtonSpacing" round={true} />
            <TwitterIcon className="shareButtonSpacing" round={true} />
          </Container>
          </Form>
          </Navbar>
          </Container>
      </Col>
      </Row>
      <Row>
      <Col md={2}></Col>
      <Col md={8}>
      <img src={bucc} width="100%"></img>
      </Col>
      <Col md={2}>
      </Col>
      </Row>
      <Row>
      <Col md={2}></Col>
      <Col md={8}>
        <div class="loading-text HeadlineAdjustment">
            <span class="loading-text-words Headline">B</span>
            <span class="loading-text-words Headline">U</span>
            <span class="loading-text-words Headline">C</span>
            <span class="loading-text-words Headline">C</span>
            <span class="loading-text-words Headline">A</span>
            <span class="loading-text-words Headline">N</span>
            <span class="loading-text-words Headline">E</span>
            <span class="loading-text-words Headline">E</span>
            <span class="loading-text-words Headline">R</span>
            <span class="loading-text-words Headline">{' '}</span>
            <span class="loading-text-words Headline">V</span>
            <span class="loading-text-words Headline">2</span>
        </div>
        </Col>
        <Col md={2}>
        </Col>
        </Row>
        <Row>
        <Col md={2}></Col>
        <Col md={8}>
        <div class="loading-text SubtitleAdjustment">
          <span class="loading-text-words Subtitle">U</span>
          <span class="loading-text-words Subtitle">N</span>
          <span class="loading-text-words Subtitle">L</span>
          <span class="loading-text-words Subtitle">I</span>
          <span class="loading-text-words Subtitle">M</span>
          <span class="loading-text-words Subtitle">I</span>
          <span class="loading-text-words Subtitle">T</span>
          <span class="loading-text-words Subtitle">E</span>
          <span class="loading-text-words Subtitle">D</span>
          <span class="loading-text-words Subtitle">{' '}</span>
          <span class="loading-text-words Subtitle">P</span>
          <span class="loading-text-words Subtitle">R</span>
          <span class="loading-text-words Subtitle">I</span>
          <span class="loading-text-words Subtitle">V</span>
          <span class="loading-text-words Subtitle">A</span>
          <span class="loading-text-words Subtitle">C</span>
          <span class="loading-text-words Subtitle">Y</span>
         </div>
      </Col>
      <Col md={2}>
      </Col>
      </Row>
      <Row className="space">
      <Col md={1}></Col>
        <Col md={7}>
        <span className="cardlineFont">Title</span>
        </Col>
        <Col md={3}>
        <video className="Video" width="100%" loop="true" autoplay="autoplay" muted>
        <source src={triangles} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        </Col>
        <Col md={1}></Col>
      </Row>
      <Row className="space">
      <Col md={1}></Col>
        <Col md={7}>
            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Body bg="dark">
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
        </Col>
        <Col md={3}>
        <video className="Video" width="100%" loop="true" autoplay="autoplay" muted>
        <source src={coinVideo} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        </Col>
        <Col md={1}></Col>
      </Row>
      <Row className="space">
      <Col md={1}></Col>
        <Col md={7}>
            <Card variant="dark" bg="blackbg" className="text-center">
              <Card.Header className="cardlineFont">Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
        </Col>
        <Col md={3}>
        <video className="Video" width="100%" loop="true" autoplay="autoplay" muted>
        <source src={cube} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>
    </>
  );
}
}