import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss'
import Home from './components/Home'
import Counter from './components/counter'

export default function App() {
    return (
        <Router basename='/reactStaticPagesWithGithubActions'>
            <Switch>
                <Route path="/counter">
                    <Counter />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}
