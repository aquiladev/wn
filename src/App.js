import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import forDev from './images/for_dev.jpg';
import forStartup from './images/for_startup.jpg';

function App() {
  return (
    <>
      <main>
        <nav className="navbar navbar-dark fixed-top d-flex p-4" style={{ backgroundColor: 'black' }}>
          <div className="mr-auto">
            <a href="/" className="navbar-brand" style={{ fontSize: '1.6rem', fontWeight: 600 }}>WhiteNodes</a>
          </div>
          <div className="">
            <a href="#about" className="navbar-brand">About</a>
            <a href="#pricing" className="navbar-brand">Pricing</a>
          </div>
        </nav>
        <div className="jumbotron jumbotron-fluid mb-0" style={{ backgroundColor: 'black', marginTop: 96 }}>
          <div className="m-5 p-5 text-center">
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
                    <h5>1 EUR/mo</h5>
                    <ul className="text-left">
                      <li>Ethereum Mainnet node</li>
                      <li>1,000,000 Requests/Day</li>
                      <li>Customer Support</li>
                    </ul>
                    <form method="POST" acceptCharset="utf-8" action="https://www.liqpay.ua/api/3/checkout">
                      <input type="hidden" name="data" value="eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJzdWJzY3JpYmUiLCJwdWJsaWNfa2V5IjoiaTk4MTk4OTg0NDQ1IiwiYW1vdW50IjoiMSIsImN1cnJlbmN5IjoiRVVSIiwiZGVzY3JpcHRpb24iOiJUZWFtIFN1YnNjcmlwdGlvbiIsInR5cGUiOiJidXkiLCJsYW5ndWFnZSI6ImVuIiwic3Vic2NyaWJlIjoxLCJzdWJzY3JpYmVfZGF0ZV9zdGFydCI6Im5vdyIsInN1YnNjcmliZV9wZXJpb2RpY2l0eSI6Im1vbnRoIn0=" />
                      <input type="hidden" name="signature" value="EZx6ujxcP9e9fNei9Oh8/9bFPx8=" />
                      <button style={{
                        border: 'none',
                        display: 'inline-block',
                        textAlign: 'center',
                        padding: '7px 20px',
                        color: '#fff',
                        fontSize: '16px',
                        fontWeight: '600',
                        fontFamily: 'OpenSans, sans-serif',
                        cursor: 'pointer',
                        borderRadius: '2px',
                        background: 'rgb(122,183,43)'
                      }}>
                        <img src="https://static.liqpay.ua/buttons/logo-small.png" name="btn_text" alt=""
                          style={{ marginRight: '7px', verticalAlign: 'middle' }} />
                        <span style={{ verticalAlign: 'middle' }}>Subscribe</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="pt-4 pb-4 bg-dark">
        <div className="container">
          <span className="text-white">© 2020 WhiteNodes</span>
        </div>
      </footer>
    </>
  );
}

export default App;
