import Avatar from "../Avatar"
import {CommentList} from "../Comments"
import CommentForm from "../CommentForm"
import "./styles.css"

function Post(props) {
  return (
    <div className="post-container">
      <Avatar name={props.data.user.name} createdAt={props.data.createdAt} />

      {props && props.data && props.data.photoUrl ? (
        <img
          style={{marginTop: 10}}
          src={props.data.photoUrl}
          width="100%"
          alt="river"
        />
      ) : (
        <p className="post-message">
          {
            props.data.message
            /*s se props data existir, printar ela... caso contrario, printar FAKE MESSAGE */
          }
        </p>
      )}
      <CommentList comments={props.data.comments} />
      <CommentForm buttonText="Comentar" placeholder="Escreva um comentário" />
    </div>
  )
}

export default Post
