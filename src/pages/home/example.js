import React, { useState } from "react"

function Example() {

	return (
	<>    
	<ExampleClassComponent/>
	<ExampleFunctionComponentAvecUseState />
	</>
	)
}

class ExampleClassComponent extends React.Component {
constructor(props){
	super(props)
	this.state = {
	content: "Salut"
	}
}

handleClick = () => {
	let newContent = undefined;
	if (this.state.content === "Salut") newContent = "Resalut!"
	if (this.state.content === "Resalut!") newContent = "Salut"
	this.setState({content:newContent}) 
}

render(){
	return (
	<div style={{margin:20}} >
		<button onClick={this.handleClick} >APPUIE SUR MOI</button>
		{this.state.content} 
	</div>
	)
}
}

function ExampleFunctionComponentAvecUseState() {

const [content, setContent] = useState("Hello")

const handleClick = () => {
	let newContent = undefined;
	if (content === "Hello") newContent = "Rehello!"
	if (content === "Rehello!") newContent = "Hello"
	setContent(newContent)
}

return (
	<div style={{margin:20}} >
	<button onClick={handleClick} >Press Me</button> 
	{content} 
	</div>
)
}

export default Example