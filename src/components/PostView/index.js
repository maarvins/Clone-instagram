import React from "react"
import Header from "../Header"
import Post from "../Post"

import api from "../../utils/api"

export const PostView = (props) => {
  const [singlePost, setSinglePost] = React.useState()

  React.useEffect(() => {
    api
      //interagindo com os posts dos outros membros do treinamento utilizando all-clients true
      .get("/post")
      .then((response) => {
        const post = response.data.find((item) => {
          return item.id === props.match.params.id
        })
        setSinglePost(post)
      })
  }, [props.match.params.id])

  console.log(props)
  return (
    <div>
      <Header />
      {singlePost && <Post data={singlePost} />}
    </div>
  )
}
