import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import forDev from "./for_dev.jpg";
import forStartup from "./for_startup.jpg";

function App() {
  return (
    <>
      <main>
        <div>
          <nav className="navbar navbar-dark bg-dark d-flex p-4">
            <div className="mr-auto">
              <a href="/" className="navbar-brand" style={{ fontSize: '1.6rem', fontWeight: 600 }}>WhiteNodes</a>
            </div>
            <div className="">
              <a href="#about" className="navbar-brand">About</a>
              <a href="#pricing" className="navbar-brand">Pricing</a>
            </div>
          </nav>
        </div>
        <div className="jumbotron jumbotron-fluid bg-dark mb-0">
          <div className="container m-5 p-5 text-center">
            <h1 className="display-4" style={{ fontSize: '3.5rem', color: 'white' }}>The fastest and easiest way to run your own Ethereum node.</h1>
          </div>
        </div>
        <div id="about" className="jumbotron jumbotron-fluid mb-0">
          <div className="container text-center">
            <h1 className="display-4">Your access to the Ethereum network</h1>
            <p className="lead">WhiteNodes infrastructure will ensure your decentralized application scales to meet your user demand.</p>
          </div>
        </div>
        <div className="jumbotron jumbotron-fluid mb-0 bg-white">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <h3>Built for developers</h3>
                <p className="lead">Connect your app immediately with our instant access APIs. We support JSON-RPC over HTTPS and WebSocket interfaces, providing request and subscription-based connections.</p>
              </div>
              <div className="col-sm">
                <img src={forDev} alt="Built for developers" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron jumbotron-fluid mb-0 bg-white">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <img src={forStartup} alt="Built for startups" style={{ width: '100%' }} />
              </div>
              <div className="col-sm">
                <h3>Built for startups</h3>
                <p className="lead">Use a robust solution for your fast-growing project.</p>
              </div>
            </div>
          </div>
        </div>
        <div id="pricing" className="jumbotron jumbotron-fluid mb-0">
          <div className="container">
            <h2>Pricing</h2>
            <div className="d-flex justify-content-center text-center">
              <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                  <h3 className="card-title">Team</h3>
                  <div className="card-text">
                    <h5>EUR 200/mo</h5>
                    <ul className="text-left">
                      <li>Ethereum Mainnet node</li>
                      <li>1,000,000 Requests/Day</li>
                      <li>Community Support Forum</li>
                      <li>Direct Customer Support</li>
                      <li>24hr Support Response Time</li>
                    </ul>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                      <input type="hidden" name="cmd" value="_s-xclick" />
                      <input type="hidden" name="hosted_button_id" value="S3LNXC93UD6Y4" />
                      <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
                      <img alt="" border="0" src="https://www.paypalobjects.com/nl_NL/i/scr/pixel.gif" width="1" height="1" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="pt-4 pb-4">
        <div className="container">
          <span className="text-muted">© 2020 WhiteNodes.</span>
        </div>
      </footer>
    </>
  );
}

export default App;
