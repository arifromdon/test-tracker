import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles';
import ReactGA from 'react-ga'
import Layout from './components/layout'

function App(){

  useEffect(() => {
    ReactGA.initialize()

    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <Router>
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    </Router>
  )
}

export default App;
