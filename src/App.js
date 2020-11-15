//React Imports
import React, {Component, Suspense} from "react";

import './App.css';
//import './main.scss';
import './loader.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

//General Style Imports
import twitter from './twitterLogo.png';
import telegram from './telegramLogo.png';

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
          <a href="https://t.me/BuccaneerV2"><img src={telegram} className="shareButtonSpacing" /></a>
            <a href="https://twitter.com/BuccaneerV2"><img src={twitter} className="shareButtonSpacing" /></a>
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
                 Buccaneer V2 is a private token on Ethereum that allows private native transactions in it's token BUCC, as well as allowing other 
                 projects to scale off of it for privacy. BUCC currently has the most private transaction system send on Ethereum and future 
                 projects will make it more private and capable than other stand-alone chains like Monero. As future contracts come out that 
                 continue to scale BUCC's privacy potential and get it more ingrained within the DeFi space, it will continue to grow in value and offer investors great returns 
                 through liquidity farming. There are only 10 million tokens that will ever be made, with about .4% currently in 
                 circulation right now.

                 <br /><br />
                 The contracts are currently not open source due to the fact that many copycats and attempted clones have been made off of 
                 BUCC's reputation and technical success. After a market capitalization of 500 million is reached, BUCC will be made open-source. 
                 Buccaneer V2 will continue to grow and release a steady stream of privacy related projects all on Ethereum and will seek to 
                 dominate the inter-operability market as well, through wrapped ethereum assets of course. So far, BUCC has already achieved what no other 
                 privacy project has done, in creating actual private sends on ethereum that break traces. 
                 
                 <br /><br />
                 Future goals include hiding all balances of not just BUCC but other ethereum assets as well and facilitating private sends of all assets. 
                 Currently, the goal is to lock-up the outstanding supply and allow for a slow trickle of tokens through the farm, while facilitating a network 
                 that charges fees and sends those to the farm. There will no plan to develop a separate chain as that will not be necessary. Ethereum has a strong 
                 and consistent hash rate and should be secure under the POS model as well. This means, by being attached to Ethereum, BUCC will be the most 
                 secure private crypto in the world, as other assets with independent chains are liable to have their nodes either taken down or their chain 51% attacked.

                 <br /><br />
                 Further, the farm can have it's interest rate changed (the limit on tokens delivered per day). There are other factors to try and create a stable price, 
                 however there is no built-in deflationary model. This is to allow the free and easy transfer of assets and value. There is a function tumbler which is 
                 significantly cheaper than competitors. It is also just as well functioning, just not as widely in use due to a lack of information. As Buccaneer V2 continues, 
                 to deliver significantly cheaper, more secure and more private products, the BUCC ecosystem will continue to grow. BUCC is currently only available on Uniswap.
                </p>
                </Card.Text>
                <hr className="whiteHRLINE" />
                <AwesomeButton type="primary" href="https://info.uniswap.org/pair/0x7772612549f27aa49c83fa59ab726f4799e4ecdc" className="special">Visit Uniswap -- Get BUCC</AwesomeButton>
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
      <Card variant="dark" bg="blackbg" className="text-center adjustCardBody">
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
                 the ethereum chain, it can run on DEXs and be accepted by all ERC20 wallets (with the exception of Dharma because it is a proxy wallet). 
                 Since information is attached to user addresses, it's privacy as you build it, meaning you can continue to add on privacy protocols and 
                 further complexity as more and more contracts come out. You can send a simple transaction and enjoy a small layer of 
                 privacy, since most transactions aren't shown across many tools.

                 <br /><br />
                 However, to remain truly untraceable you need to use the API, Bermuda. Bermuda is already out and proven to be unbreakable.
                 It is one of many projects that will be in the future BUCC portfolio that will continue to scale and accelerate BUCC's privacy protocol. 
                 As it currently stands, BUCC is completely uncrackable 
                 and as time goes on and stronger and stronger computers and chain analysis tools come out, newer and more up to date 
                 BUCC products will come out. Everything that is released has backwards compatibility and all you will ever need is the 
                 token to use it for all future products.

                 <br /><br />
                 You can rest assured that when you use the Bermuda, that you are using the most advanced privacy tool on Ethereum today. However, to 
                 send BUCC to an address through Bermuda, you need to whitelist that address, just one time into the BUCC ecosystem. You can use any address 
                 and any wallet and just need to send 0 BUCC to that address preferably from a third party address (to avoid traces). From then on and forever, 
                 that address can interact with and receive any amount of BUCC. You can also tumble BUCC tokens by sending a balance to the contract address, then 
                 sending a recipient 0 BUCC, through the API (Bermuda) to send the tokens in the contract address to the recipient.  
                </p>
                </Card.Text>
                <hr className="whiteHRLINE" />
                <AwesomeButton type="primary" href="https://buccaneerv2.web.app/" className="special">Visit Bermuda -- The API</AwesomeButton>
              </Card.Body>
            </Card>
        </Col>
        <Col md={2}></Col>
      </Row>

      <Row className="space">
      <Col md={3}>
      </Col>
      <Col>
      <Card variant="dark" bg="blackbg" className="text-center adjustCardBody">
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
        <Card variant="dark" bg="blackbg" className="text-center adjustcardborder">
              <Card.Body className="adjustCardBody">
                <Card.Title className="cardFont cardSubtitle cardFontMain">The Most Secure Private Crypto in the World</Card.Title>
                <Card.Text className="cardBody">
                <hr className="whiteHRLINE" />
                <p className="cardFontMain">
                 Buccaneer V2 (BUCC) shreds older data, maintaining only a current drawable state for users to maintain their privacy. 
                 With no user history to backtrace that resides contract side, a person would have to crack the BUCC code, use machine learning 
                and then highlight a user and follow all their txs. Further privacy protocol implementations will require user key permissions,
                 rendering even machine learning obsolete. Combined with new products coming out to secure tokens; including LP tokens, users 
                 can earn farm and liquidity mining rewards and only have to remember a few phone number length numbers to access their assets.

                 <br /><br />
                 These future products will come out in the next months. In the meantime, users can earn interest right now for holding BUCC, 
                 through the farm. Purposefully set up to distribute BUCC supply and reward holders of the token, you can deposit ether and BUCC 
                 to uniswap and earn continual farm rewards. As future products secure the value of BUCC and increase it's security, you can 
                 retain your wealth and it's value through BUCC, privately. The farm is currently up and running and offers a stable rate of return 
                 with 10 BUCC being emitted per day.

                 <br /><br />
                 The farm is also the first private farm in the world, in that you can also secure private withdrawls. Any reward you earn with the BUCC 
                 farm, Sargasso, you can send to any ethereum address that is whitelisted by having 0 BUCC sent to it at any time before. This reward 
                 will be sent using the same protocol as the API and will ensure that you reward can go to any address, privately. Further, the farm 
                 keeps track of the number of other farmers in the pool as well as the number of tokens currently available to farm. More tokens, about 
                 2,000,000 or 20% of the entire supply will be locked permanently into the farm contract in the coming months. 
                </p>
                </Card.Text>
                <hr className="whiteHRLINE" />
                <AwesomeButton type="primary" href="http://buccv2.web.app/" className="special">Visit Sargasso -- The Farm</AwesomeButton>
              </Card.Body>
            </Card>
        </Col>
        <Col md={2}></Col>
      </Row>




      <Row className="space">
      <Col md={3}>
      </Col>
      <Col>
      <Card variant="dark" bg="blackbg" className="text-center adjustCardBody">
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
            <Card variant="dark" bg="blackbg" className="text-center marginTop lastCard">
              <Card.Body className="adjustCardBody">
                <Card.Title className="cardFont cardSubtitle cardFontMain">The Most Scalable Private Currency World-Wide</Card.Title>
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
                 the BUCC contract before (meaning they must have been whitelisted). Be careful and make 
                 sure you are not tumbling BUCC tokens through the contract address when interacting with the tumbler or else those tokens 
                 will be sent to the recipient address.

                 <br /><br />
                 Tumbling is the least secure form of privacy and further contracts will be implemented for extremely tight ship forms of privacy. 
                 The tumbler does however work and is the only work tumbler for ERC20 tokens in all of the Ethereum ecosphere. Currently, more tokens 
                 and ether must be deposited for true effectiveness but as BUCC continues to grow, the tumbler will become more and more effective.  
                </p>
                </Card.Text>
                <hr className="whiteHRLINE" />
                <AwesomeButton type="primary" href="http://buccv2.web.app/" className="special">Visit Havoc -- The Tumbler</AwesomeButton>
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