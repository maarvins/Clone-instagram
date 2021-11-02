import React from "react"
import Header from "../Header"
import Post from "../Post"
import CommentForm from "../CommentForm"
import api from "../../utils/api"

import Colors from "../../styles/colors"
import "./styles.css"

export const Timeline = (props) => {
  console.log("Render da Timeline")
  const [postList, setPostList] = React.useState([])
  console.log("PostList: ", postList)

  React.useEffect(() => {
    api
      //interagindo com os posts dos outros membros do treinamento utilizando all-clients true
      .get("/post", {headers: {"all-clients": true}})
      .then((response) => setPostList(response.data))
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
          postList.map((post) => (
            <Post
              onClick={() => props.history.push(`/post/${post.id}`)}
              data={post}
              key={post.id}
            />
          ))
        )}
      </div>
    </div>
  )
}
