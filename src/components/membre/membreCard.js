import React from "react"
import "./index.scss"


function MemberCard (props) {

	let star = props.star || "";
	let date = props.date || "";
	let title = props.title || "";
	let content = props.content || "";
	let name = props.name || "";

	return (
		<div className="memberCard">
			<div className="memberCard__star">
				<img src={star} alt="star"></img>
				</div>
			<div className="memberCard__date">{date}</div>
			<div className="memberCard__title">{title}</div>
			<div className="memberCard__content">{content}</div>
			<div className="memberCard__name">{name}</div>
		</div>
	)
}

export default MemberCard