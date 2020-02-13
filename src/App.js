import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import forDev from './images/for_dev.jpg';
import forStartup from './images/for_startup.jpg';
import visaMC from './images/visa-mc.png';

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

function Page() {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <main>
        <nav className="navbar navbar-dark fixed-top d-flex p-3" style={{ backgroundColor: 'black' }}>
          <div className="mr-auto">
            <a href="/" className="navbar-brand" style={{ fontSize: '1.6rem', fontWeight: 600 }}>{t('title')}</a>
          </div>
          <div>
            <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('ru')} className="mr-3">RU</button>
            <a href="#about" className="navbar-brand">{t('menu.about')}</a>
            <a href="#pricing" className="navbar-brand">{t('menu.pricing')}</a>
          </div>
        </nav>
        <div className="jumbotron jumbotron-fluid mb-0" style={{ backgroundColor: 'black', marginTop: 80 }}>
          <div className="m-5 p-5 text-center">
            <h1 className="display-4" style={{ fontSize: '3.5rem', color: 'white' }}>{t('header')}</h1>
          </div>
        </div>
        <div id="about" className="jumbotron jumbotron-fluid mb-0">
          <div className="container text-center">
            <h1 className="display-4">{t('about.title')}</h1>
            <p className="lead">{t('about.subtitle')}</p>
          </div>
        </div>
        <div className="jumbotron jumbotron-fluid mb-0 bg-white">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <h3>{t('about.target1.title')}</h3>
                <p className="lead">{t('about.target1.subtitle')}</p>
              </div>
              <div className="col-sm">
                <img src={forDev} alt={t('about.target1.title')} style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron jumbotron-fluid mb-0 bg-white">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <img src={forStartup} alt={t('about.target2.title')} style={{ width: '100%' }} />
              </div>
              <div className="col-sm">
                <h3>{t('about.target2.title')}</h3>
                <p className="lead">{t('about.target2.subtitle')}</p>
              </div>
            </div>
          </div>
        </div>
        <div id="pricing" className="jumbotron jumbotron-fluid mb-0">
          <div className="container">
            <h2>{t('pricing.title')}</h2>
            <div className="d-flex justify-content-center text-center">
              <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                  <h3 className="card-title">{t('pricing.team_subscr.title')}</h3>
                  <div className="card-text">
                    <h5>{t('pricing.team_subscr.price')}</h5>
                    <ul className="text-left">
                      <li>{t('pricing.team_subscr.p1')}</li>
                      <li>{t('pricing.team_subscr.p2')}</li>
                      <li>{t('pricing.team_subscr.p3')}</li>
                    </ul>
                    <form method="POST" acceptCharset="utf-8" action="https://www.liqpay.ua/api/3/checkout">
                      <input type="hidden" name="data" value="eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJzdWJzY3JpYmUiLCJwdWJsaWNfa2V5Ijoic2FuZGJveF9pMTEzNzMxNTU2NDYiLCJhbW91bnQiOiIxIiwiY3VycmVuY3kiOiJFVVIiLCJkZXNjcmlwdGlvbiI6IlRlc3QgVGVhbSBTdWJzY3JpcHRpb24iLCJ0eXBlIjoiYnV5IiwibGFuZ3VhZ2UiOiJlbiIsInN1YnNjcmliZSI6MSwic3Vic2NyaWJlX2RhdGVfc3RhcnQiOiJub3ciLCJzdWJzY3JpYmVfcGVyaW9kaWNpdHkiOiJtb250aCJ9" />
                      <input type="hidden" name="signature" value="GiKfjJpe50u/IY4kZ6lqN9j1Hwg=" />
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
                        <span style={{ verticalAlign: 'middle' }}>{t('pricing.subscribe')}</span>
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
        <div className="container d-flex">
          <div className="mr-auto text-white">
            © 2020 WhiteNodes
          </div>
          <div className="text-white">
            <img src={visaMC} alt='Mastercard / Visa' style={{ width: 90 }} />
          </div>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}
