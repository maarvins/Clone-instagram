import "./App.css"
import Header from "./components/Header"
import PostForm from "./components/PostForm"
import Post from "./components/Post"

//formas de se criar objetos e utilizalos (dados para posts)

const posts = [
  {
    username: "Kalleb Keller",
    date: "20 Oct 2021 - 19:00",
    message: "Top!!!",
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
  return (
    <div className="app">
      <Header />
      <PostForm />
      {posts.map((post) => {
        //cada post é um item do array de posts
        return <Post data={post} />
      })}
    </div>
  )
}

export default App
