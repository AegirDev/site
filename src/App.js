//React Imports
import React, {Component, Suspense} from "react";

import './App.css';
//import './main.scss';
import './loader.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//General Style Imports
import {TelegramIcon, TwitterIcon} from "react-share";

/* ELEMENTS IMPORTS */
import buccLogo from './buccCorner.png';
import bucc from './bucc.png';
import triangles from './firstvideo.mp4';
import coinVideo from './secondvideo.mp4';
import cube from './thirdvideo.mp4';

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
      loaderCSS: "loaderCoverSheet"
    }
    document.body.style.overflowY = "hidden";
  }

        componentDidMount = async () => {
        this.setupLoader();
        }

        setupLoader = async () => {
        var that = this;
        setTimeout(function(){that.setState({percentageLoader: "20%"})}, 1000);
        setTimeout(function(){that.setState({percentageLoader: "40%"})}, 2000);
        setTimeout(function(){that.setState({percentageLoader: "50%"})}, 3000);
        setTimeout(function(){that.setState({percentageLoader: "70%"})}, 4000);
        setTimeout(function(){that.setState({percentageLoader: "90%", loaderCSS: "loaderCoverSheet2"});
        document.body.style.overflowY = "scroll";}, 4800);
        setTimeout(function(){that.setState({loader: false});}, 5000);
     
        }

  render () {
  return (
    <>
<Suspense>
    { this.state.loader && (
        <React.Fragment>
        <div className={this.state.loaderCSS}>
        <Container>
        <Row>
        <Col>
        <div class="loader">
        <div class="inner one"></div>
        <div class="inner two"></div>
        <div class="inner three"></div>
        </div>
        </Col>
        </Row>
        <Row>
        <Col>
        <span className="loaderText loaderLight">Loading... {this.state.percentageLoader}</span>
        </Col>
        </Row>
        </Container>
        </div>
        </React.Fragment>
      )}
    </Suspense>

    
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
                        src={buccLogo}
                        className="d-inline-block align-top imageSize" />
                        <h3 className="headlineFont">Buccaneer V2</h3>
          </Container>
          </Navbar.Brand>
          </Form>
          <Form>
          <Container>
            <TelegramIcon href="https://t.me/BuccaneerV2" className="shareButtonSpacing" round={true} />
            <TwitterIcon href="https://twitter.com/BuccaneerV2" className="shareButtonSpacing" round={true} />
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
      <span class="loading-text-words Headline">
      BUCCANEER V2
      </span>
      </div>
        </Col>
        <Col md={2}>
        </Col>
        </Row>
        <Row>
        <Col md={2}></Col>
        <Col md={8}>
        <div class="loading-text SubtitleAdjustment">
        <span class="loading-text-words Subtitle">
        UNLIMITED PRIVACY
        </span>
        </div>
      </Col>
      <Col md={2}>
      </Col>
      </Row>

      <Row>
      <Col md={3}>
      </Col>
      <Col md={6}>
      <Card variant="dark" bg="blackbg" className="text-center">
      <Card.Body className="adjustCardBody">
                <Card.Text className="cardBody">
                <hr className="whiteHRLINE" />
                <p className="cardFontMain">
                 Buccaneer V2 (BUCC) is a private token on Ethereum that is both a token and a private contract. It allows other 
                 projects to scale off of it for privacy and currently has the most private transaction system on Ethereum and in, 
                 fact the entire cryptocurrency realm. As future contracts come out that continue to scale BUCC's privacy potential 
                 and get it more ingrained within the DeFi space, it will continue to grow in value and offer investors great returns 
                 through liquidity farming. There are only 10 million tokens that will ever be made, with about .5% currently in 
                 circulation right now.

                 <br /><br />
                 The contracts are currently not open source due to the fact that many copycats and attempted clones have been made off of 
                 BUCC's reputation and technical success. After a market capitalization of 500 million is reached, BUCC will be made open-source. 
                 Buccaneer V2 will continue to grow and release a steady stream of privacy related projects all on Ethereum and will seek to 
                 dominate the inter-operability market as well through wrapped ethereum assets. So far, BUCC has already achieved what no other 
                 privacy project has done, created actual private txs on ethereum. You can buy BUCC on uniswap. 
                </p>
                </Card.Text>
                <hr className="whiteHRLINE" />
                <Button variant="dark" href="https://info.uniswap.org/pair/0x7772612549f27aa49c83fa59ab726f4799e4ecdc" target="_blank">Visit Uniswap -- Get BUCC</Button>
              </Card.Body>
            </Card>
      </Col>
      <Col md={3}>
      </Col>
      </Row>
      

      <Row className="space">
      <Col md={3}>
      </Col>
      <Col>
      <Card variant="dark" bg="blackbg" className="text-center">
              <Card.Header className="cardFont cardTitle cardFontMain">Inter-Locking Contracts</Card.Header>
      </Card>
      </Col>
      <Col md={3}>
      </Col>
      </Row>

      <Row className="limitHeightVideo text-center">
      <Col md={3}>
      </Col>
      <Col>
      <video className="VideoTriangles" width="40%" loop="true" autoplay="autoplay" muted>
        <source src={triangles} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </Col>
      <Col md={3}>
      </Col>
      </Row>
      <Row>
      <Col md={2}></Col>
        <Col md={8}>
        <Card variant="dark" bg="blackbg" className="text-center">
              <Card.Body className="adjustCardBody">
                <Card.Title className="cardFont cardSubtitle cardFontMain">Further Transactions Increase Security</Card.Title>
                <Card.Text className="cardBody">
                <hr className="whiteHRLINE" />
                <p className="cardFontMain">
                 The more transactions there are on the Buccaneer V2 (BUCC) chain, the more complex and secure BUCC becomes. 
                 As Ethereum scales BUCC will only become more integral and resistant to hacks and takedowns. Since BUCC is on 
                 the ethereum chain, it can run on DEXs, be accepted by all ERC20 wallets and continue to scale. Since information 
                 is attached to user addresses, it's privacy as you build it. You can send simple txs and enjoy a small layer of 
                 privacy, most txs aren't shown across many tools.

                 <br /><br />
                 However, to remain truly untraceable you need to use the API, Bermuda. Bermuda is just one of many coming projects, 
                 to continue to scale and accelerate BUCC's privacy protocol. As it currently stands, BUCC is completely uncrackable 
                 and as time goes on and stronger and stronger computers and chain analysis tools come out, newer and more up to date 
                 BUCC products will come out. Everything that is released has backwards compatibility and all you will ever need is the 
                 token to use it for all future products.
                </p>
                </Card.Text>
                <hr className="whiteHRLINE" />
                <Button variant="dark" href="https://buccaneerv2.web.app/" target="_blank">Visit Bermuda -- The API</Button>
              </Card.Body>
            </Card>
        </Col>
        <Col md={2}></Col>
      </Row>

      <Row className="space">
      <Col md={3}>
      </Col>
      <Col>
      <Card variant="dark" bg="blackbg" className="text-center">
              <Card.Header className="cardFont cardTitle cardFontMain">Data Burn</Card.Header>
      </Card>
      </Col>
      <Col md={3}>
      </Col>
      </Row>

      <Row className="limitHeightVideo text-center">
      <Col md={3}>
      </Col>
      <Col>
      <video className="VideoCoin" loop="true" autoplay="autoplay" muted>
        <source src={coinVideo} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </Col>
      <Col md={3}>
      </Col>
      </Row>
      <Row>
      <Col md={2}></Col>
        <Col md={8}>
        <Card variant="dark" bg="blackbg" className="text-center">
              <Card.Body className="adjustCardBody">
                <Card.Title className="cardFont cardSubtitle cardFontMain mobileAdjustCoin">The Most Secure Private Crypto in the World</Card.Title>
                <Card.Text className="cardBody">
                <hr className="whiteHRLINE" />
                <p className="cardFontMain">
                 Buccaneer V2 (BUCC) shreds older data, maintaining only a current drawable state for users to maintain their privacy. 
                 With no user history to backtrace that resides contract side, a person would have to crack the BUCC code, use machine learning 
                and then highlight a user and follow all their txs. Further privacy protocol implementations will require user key permissions,
                 rendering even machine learning obsolete. Combined with new products coming out to secure tokens, including LP tokens, users 
                 can earn farm and liquidity mining rewards and only have to remember a few phone number length numbers.
                 <br /><br />
                 These future products will come out in the next months. In the meantime, users can earn interest right now for holding BUCC, 
                 through the farm. Purposefully set up to distribute BUCC supply and reward holders of the token, you can deposit ether and BUCC 
                 to uniswap and earn continual farm rewards. As future products secure the value of BUCC and increase it's security, you can 
                 retain your wealth and it's value through BUCC, privately. The farm is currently up and running and offers a stable rate of return 
                 with 10 BUCC being emitted per day.
                </p>
                </Card.Text>
                <hr className="whiteHRLINE" />
                <Button variant="dark" href="http://buccv2.web.app/" target="_blank">Visit Sargasso -- The Farm</Button>
              </Card.Body>
            </Card>
        </Col>
        <Col md={2}></Col>
      </Row>




      <Row className="space">
      <Col md={3}>
      </Col>
      <Col>
      <Card variant="dark" bg="blackbg" className="text-center">
              <Card.Header className="cardFont cardTitle cardFontMain">Truly Scalable</Card.Header>
      </Card>
      </Col>
      <Col md={3}>
      </Col>
      </Row>

      <Row className="limitHeightVideo text-center">
      <Col md={3}>
      </Col>
      <Col>
      <video className="VideoCube" loop="true" autoplay="autoplay" muted>
        <source src={cube} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </Col>
      <Col md={3}>
      </Col>
      </Row>
      <Row>
      <Col md={2}></Col>
        <Col md={8}>
            <Card variant="dark" bg="blackbg" className="text-center marginTop">
              <Card.Body className="adjustCardBody">
                <Card.Title className="cardFont cardSubtitle cardFontMain mobileAdjustCube">The Most Scalable Private Currency World-Wide</Card.Title>
                <hr className="whiteHRLINE" />
                <Card.Text className="cardBody">
                <p className="cardFontMain">
                 Buccaneer V2 (BUCC) is built on ethereum and thus allows further contracts to be built on top of it. Further
                 privacy projects can be built with BUCC, expand it, mold it, tweak it and use the BUCC engine itself 
                 for their own privacy needs. In fact, other standard tokens and ethereum itself can be masked through 
                 tumbling using BUCC. Further projects can garner fees and pass those fees onto the farm to award interest 
                 to those who hold BUCC. 
                 <br /><br />
                 You can in fact, use the BUCC tumbler right now, to tumble both ETH and ERC20 tokens for the cost of only one 
                 BUCC per month as a subscription. This product works by using a key address or a third address which is granted 
                 custodial privledges by the main or first address. 
                 There is only one stipulation; addresses tumbled to, tumbling in and used as a key must have interacted with 
                 the BUCC contract before. This is very simple to do, simply send an address zero BUCC from any address and have 
                 them whitelisted into the contract and then, from then on and forever, that address will be whitelisted and can 
                 use any and all BUCC products.
                </p>
                </Card.Text>
                <hr className="whiteHRLINE" />
                <Button variant="dark" href="http://buccv2.web.app/" target="_blank">Visit Havoc -- The Tumbler</Button>
              </Card.Body>
            </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
    </>
  );
}
}