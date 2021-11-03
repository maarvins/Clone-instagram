import React from "react"
import api from "../../utils/api"
import {FiHeart} from "react-icons/fi"

import "./styles.css"

function LikeBtn(props) {
  const [likesCount, setLikesCount] = React.useState(props.data.likesCount)

  return (
    <div>
      <button
        className="like"
        onClick={async () => {
          try {
            {
              await api.post(`/post/${props.data.id}/like`)
            }
          } catch (error) {
            console.log("Erro inesperado")
            console.error(error)
          }
          api.get(`/post/${props.data.id}`).then((response) => {
            setLikesCount(response.data.likesCount)
          })
        }}
      >
        <div className="count-like">
          <div className="like-count">{likesCount}</div>
          <div className="like-icon">
            <FiHeart size={20} />
          </div>
        </div>
      </button>
    </div>
  )
}

export default LikeBtn
