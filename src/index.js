import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <header>
        <h1><a href="/nick-cave">Nick Cave Lyric Search</a></h1>
        <h3><em>The Birthday Party, Nick Cave & The Bad Seeds, Grinderman, and </em> Carnage</h3>
    </header>
    <React.StrictMode>
        <App />
    </React.StrictMode>
    <footer>
        <p>Last updated 2024/09/10. First published 2024/08/26.</p>
        <p>
            Made with <a href="http://reactjs.org/">React</a>. See the <a href="https://github.com/sailorfe/nick-cave">changelog</a> and <a href="https://github.com/sailorfe/nick-cave-lyrics">dataset</a>. Lyrics compiled from Nick Cave's <a href="https://nickcave.com/lyrics">official website</a> and <em>Nick Cave: The Complete Lyrics 1978–2013</em>.
        </p>
    </footer>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
