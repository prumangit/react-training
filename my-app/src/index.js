import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './components/nav/nav';
import Content from './components/content/content';
import AirbnbNav from './components/airbnb/nav/nav';
import AirbnbHero from './components/airbnb/hero/hero';
import AirbnbCardList from './components/airbnb/card-container/card-container';
import MemeGeneratorNav from './components/meme-generator/nav/nav';
import MemeForm from './components/meme-generator/meme-form/meme-form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MemeGeneratorNav />
    <MemeForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
