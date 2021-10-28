import "./styles.css"

function CommentForm(props) {
  return (
    <div className="component-form-container">
      <input className="component-form-input" placeholder={props.placeholder} />
      <button className="component-form-button">Publicar</button>
    </div>
  )
}

export default CommentForm
