function Avatar(props) {
  return (
    <div>
      <span style={{fontSize: 16, fontStyle: "bold", marginRight: 15}}>
        {props.name}
      </span>
      <small> 27 Oct 2021 - 18:00 </small>
      <br />
    </div>
  )
}

export default Avatar
