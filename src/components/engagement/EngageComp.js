import { Link } from "react-router-dom"
import React from "react"
import "./index.scss"

function EngageComp (props) {
  return (
    <div className="engageContent">
      <h4 className="engageContent__title">{props.title}</h4>
      <p>{props.text}</p>
      <Link className="engageContent__link" to="/">En savoir plus</Link>
    </div>
  )
}

export default EngageComp