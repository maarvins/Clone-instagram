import "./styles.css"

function Avatar(props) {
  return (
    <div className="avatar-container">
      <div className="avatar-picture"></div>
      <div className="avatar-info">
        <span style={{fontSize: 14, fontWeight: 600}}>{props.name}</span>
        <small style={{fontSize: 12}}>13 Oct 2021 - 23:30</small>
      </div>
    </div>
  )
}

export default Avatar
