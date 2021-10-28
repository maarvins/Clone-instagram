import Avatar from "../Avatar"
import {CommentList} from "../Comments"
import CommentForm from "../CommentForm"
import "./styles.css"

function Post(props) {
  return (
    <div className="post-component">
      <Avatar name={props.data.username} />
      <p
        style={{
          border: 1,
          borderColor: "silver",
          borderStyle: "solid",
          textAlign: "center",
          margin: 20,
          padding: 10
        }}
      >
        {
          props.data.message
          /*s se props data existir, printar ela... caso contrario, printar FAKE MESSAGE */
        }
      </p>
      <CommentList comments={props.data.comments} />
      <CommentForm />
    </div>
  )
}

export default Post
