import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from "./components/Login"
import {Timeline as TimelineView} from "./components/Timeline"
import {PostView} from "./components/PostView"

import "./App.css"

//ROTAS PRIVADAS - ACESSO SOMENTE AO ESTAR LOGADO
const PrivatesRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/post/:id" component={PostView} />
        <Route path="/" exact={true} component={TimelineView} />
        <Route path="*">
          <div>
            <h1>404 - Não há nada por aqui ! </h1>
          </div>
        </Route>
      </Switch>
    </Router>
  )
}
//ROTAS PUBLICAS - ACESSO SEM ESTAR LOGADO
const PublicRoutes = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login
            onLogin={(user) =>
              user ? props.onLogin(true) : props.onLogin(false)
            }
          />
        </Route>
        <Route path="*">
          <div>
            <h1>404 - Não há nada por aqui ! </h1>
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

//formas de se criar objetos e utilizalos (dados para posts)
function App() {
  const accessToken = localStorage.getItem("accessToken")
  const [isAuthenticated, setIsAuthenticated] = React.useState(!!accessToken)

  if (isAuthenticated) {
    return <PrivatesRoutes />
  } else {
    return <PublicRoutes onLogin={setIsAuthenticated} />
  }
}

export default App
