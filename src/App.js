import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from "./components/Login"
import {Timeline as TimelineView} from "./components/Timeline"

import "./App.css"

//formas de se criar objetos e utilizalos (dados para posts)

function App() {
  const accessToken = localStorage.getItem("accessToken")
  const [showLogin, setShowLogin] = React.useState(!accessToken)

  return (
    <Router>
      <Switch>
        <Route path="/entrar">
          <Login
            onLogin={(user) =>
              user ? setShowLogin(false) : setShowLogin(true)
            }
          />
        </Route>
        <Route path="/">
          <TimelineView />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
