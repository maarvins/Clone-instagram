import "./styles.css"

function CommentForm(props) {
  return (
    <div className="component-form-container" style={props.style}>
      <input className="component-form-input" placeholder={props.placeholder} />
      <button
        style={props.buttonColor ? {color: props.buttonColor} : {}}
        className="component-form-button"
      >
        {props.buttonText}
      </button>
    </div>
  )
}

export default CommentForm
