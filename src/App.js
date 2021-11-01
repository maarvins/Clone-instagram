import React from "react"
import "./App.css"
import Header from "./components/Header"
import Post from "./components/Post"
import CommentForm from "./components/CommentForm"
import Colors from "./styles/colors"
import Login from "./components/Login"

//formas de se criar objetos e utilizalos (dados para posts)

const posts = [
  {
    username: "Kalleb Keller",
    date: "20 Oct 2021 - 19:00",
    message: "Top!!!",
    image: "/assets/paisagem.jpg",
    comments: [
      {
        username: "Izzie",
        date: "20 Oct 2021 - 21:00",
        message: "isto é sensacional!"
      },
      {
        username: "Robbert",
        date: "29 Oct 2021 - 11:00",
        message: "hmm....."
      }
    ]
  },
  {
    username: "Isaac Sena",
    date: "23 Oct 2021 - 21:30",
    message: "Ok. Incrivel!"
  }
]

posts.push({
  username: "Sansão",
  date: "30 Oct 2021 - 19:00",
  message: "QUERO SAIR DO CANIL! "
})

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

  return (
    <div>
      <div
        style={{
          width: "100vw",
          backgroundColor: "white",
          borderBottom: `1px solid ${Colors.darkBorder}`,
          marginBottom: "40px"
        }}
      >
        <Header />
      </div>
      <div style={{maxWidth: "614px", margin: "auto"}}>
        <CommentForm
          styles={{
            border: `1px solid ${Colors.darkBorder}`,
            backgroundColor: "white"
          }}
          buttonColor={Colors.red}
          placeholder="Faça uma publicação"
          buttonText="Publicar"
        />
        {posts.map((post) => (
          <Post data={post} />
        ))}
      </div>
    </div>
  )
}

export default App
