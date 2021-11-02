import React from "react"
import Header from "../Header"
import Post from "../Post"
import CommentForm from "../CommentForm"
import api from "../../utils/api"

import Colors from "../../styles/colors"
import "./styles.css"

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

export const Timeline = (props) => {
  const [postList, setPostList] = React.useState([])

  React.useEffect(() => {
    api.get("/post").then((response) => setPostList(response.data))
  }, [])

  console.log("Render da Timeline")

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
        {postList.length === 0 ? (
          <p>Loading...</p>
        ) : (
          postList.map((post) => <Post data={post} />)
        )}
      </div>
    </div>
  )
}
