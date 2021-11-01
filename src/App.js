import React from "react"
import "./App.css"
import Login from "./components/Login"
import {Timeline} from "./components/Timeline"

//formas de se criar objetos e utilizalos (dados para posts)

function App() {
  const accessToken = localStorage.getItem("accessToken")
  const [showLogin, setShowLogin] = React.useState(!accessToken)

  if (showLogin) {
    return (
      <Login
        onLogin={(user) => (user ? setShowLogin(false) : setShowLogin(true))}
      />
    )
  }

  return <Timeline />
}

export default App
