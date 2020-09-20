import React from "react"
import "./index.scss"
import Carousel from "../../components/carousel"

function Home() {

	return (
		<div className="container container__home">
			<h1>Accueil</h1>
			<h2>Sous-Titre</h2>
			<Carousel />
		</div>
	)
}

export default Home