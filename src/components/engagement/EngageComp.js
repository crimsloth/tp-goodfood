import { Link } from "react-router-dom"
import React from "react"
import "./index.scss"

function EngageComp (props) {
  return (
    <div className="engageContent">
      <h4>{props.title}</h4>
      <p>{props.children}</p>
      <Link>{props.link}</Link>
    </div>
  )
}

export default EngageComp