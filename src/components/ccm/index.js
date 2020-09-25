import React from "react"
import "./index.scss"

function Ccm(props) {
	return (
		<div className="ccm">
			<div className="ccm__content">
				<div className="ccm__head">
					{props.header}
				</div>
			</div>
			<div className="ccm__fiches">
				{props.children}
			</div>
		</div>
	)
}

export default Ccm