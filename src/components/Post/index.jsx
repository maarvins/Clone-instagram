import Avatar from "../Avatar"
import {CommentList} from "../Comments"
import CommentForm from "../CommentForm"
import LikeBtn from "../LikeBtn"

import "./styles.css"

function Post(props) {
  return (
    <div className="post-container">
      <div className="post-header">
        <Avatar name={props.data.user?.name} createdAt={props.data.createdAt} />
        <LikeBtn data={props.data} />
      </div>
      {props && props.data && props.data.photoUrl ? (
        <img
          style={{marginTop: 10, cursor: "pointer"}}
          src={props.data.photoUrl}
          width="100%"
          alt="river"
          onClick={() => props.onClick()}
        />
      ) : (
        <p className="post-message">
          {
            props.data.message
            /*s se props data existir, printar ela... caso contrario, printar FAKE MESSAGE */
          }
        </p>
      )}
      <CommentList comments={props.data.lastComment} />
      <CommentForm buttonText="Comentar" placeholder="Escreva um comentário" />
    </div>
  )
}

export default Post
