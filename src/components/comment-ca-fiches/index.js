import React from "react"

function CommentFiche (props) {
	return(
		<div className="fiches">
			<div className="fiches__image">
				{props.image}
			</div>
			<div className="fiches__title">
				<h4>{props.title}</h4>
			</div>
			<div className="fiches__content">
				{props.children}
			</div>
		</div>
	)
}

export default CommentFiche