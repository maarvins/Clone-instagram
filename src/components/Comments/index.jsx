import Avatar from "../Avatar"

function Comment(props) {
  return (
    <div
      style={{
        border: 1,
        borderColor: "skyblue",
        borderStyle: "dashed",
        textAlign: "center",
        margin: 3,
        padding: 2
      }}
    >
      <Avatar name={props.userName} />
      {props.message}
    </div>
  )
}

const CommentList = (props) => {
  if (!props.comments) {
    return (
      <div>
        <p>Seja o primeiro a comentar!</p>
      </div>
    )
  }

  return (
    <div>
      <small>Comentários:</small>
      {props.comments.map((comments) => {
        return (
          <Comment message={comments.message} userName={comments.username} />
        )
      })}
    </div>
  )
}

export {Comment, CommentList}
