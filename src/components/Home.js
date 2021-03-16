import React from 'react'
import LiveClock from './LiveClock'
import { Link } from 'react-router-dom'
import './Home.scss'

export default function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img
                    src={process.env.PUBLIC_URL + '/img/logo.svg'}
                    className="App-logo"
                    alt="logo"
                />
                <p className="App-env"> > {process.env.REACT_APP_CODE}</p>
            </header>
            <main className="clock-wrapper centre-align">
                <LiveClock />
            </main>
            <footer>
                <button>
                    <Link to="/counter">Counter</Link>
                </button>
            </footer>
        </div>
    )
}
