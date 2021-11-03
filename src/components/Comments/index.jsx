import "./styles.css"

function Comment(props) {
  return (
    <div className="comment">
      <strong>{props.userName}</strong>
      {props.message}
    </div>
  )
}

const CommentList = (props) => {
  return (
    <div className="comments-container">
      {props.comments ? (
        <Comment
          message={props.comments.text}
          userName={props.comments.user.name}
        />
      ) : (
        <span style={{opacity: 0.4, fontSize: "14px"}}>
          Seja o primeiro a comentar!
        </span>
      )}
    </div>
  )
}

export {Comment, CommentList}
