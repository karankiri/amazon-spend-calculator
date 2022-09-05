import React, { useEffect } from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  const handleCalculate = () => {
    console.log('hello');
    chrome.tabs.query(
      { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
      function (tabs) {
        console.log(
          '🚀 ~ file: Popup.jsx ~ line 12 ~ handleCalculate ~ tabs',
          tabs
        );
        const { id: tabId } = tabs[0];

        let code = `window.document.querySelectorAll(
          '.yohtmlc-order-total .value'
        )`;

        // http://infoheap.com/chrome-extension-tutorial-access-dom/
        chrome.tabs.executeScript(tabId, { code }, function (result) {
          console.log('🚀 ~ file: Popup.jsx ~ line 20 ~ result', result);
          // result has the return value from `code`
        });
      }
    );
    const orders = window.document.querySelectorAll(
      '.yohtmlc-order-total .value'
    );
    console.log(
      '🚀 ~ file: Popup.jsx ~ line 9 ~ handleCalculate ~ orders',
      orders
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleCalculate}>Calculate</button>
        <p>
          Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  );
};

export default Popup;
