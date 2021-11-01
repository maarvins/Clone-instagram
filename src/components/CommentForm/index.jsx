import React from "react"
import "./styles.css"
import {VscSmiley} from "react-icons/vsc"
import api from "../../utils/api"

function CommentForm(props) {
  const [photoUrl, setPhotoUrl] = React.useState("")

  const submitPost = async () => {
    const data = {
      photoUrl: photoUrl,
      description: "just a post"
    }
    console.log("vou postar!")
    const response = await api.post("/post", data)
    console.log(response)
  }

  return (
    <div className="component-form-container" style={props.style}>
      <VscSmiley size={30} />
      <input
        value={photoUrl}
        onChange={(event) => setPhotoUrl(event.target.value)}
        className="component-form-input"
        placeholder={props.placeholder}
      />
      <button
        onClick={() => submitPost()}
        style={props.buttonColor ? {color: props.buttonColor} : {}}
        className="component-form-button"
      >
        {props.buttonText}
      </button>
    </div>
  )
}

export default CommentForm
