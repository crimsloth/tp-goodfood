import React from "react"
import Carousel from "../../components/carousel"
import Button from "../../components/button"
import CommentFiche from "../../components/comment-ca-fiches"

//Image
import Play from "../../assets/img/svg/play.svg"
import CCM1 from "../../assets/img/how-it-work/how-it-works-visual-1.png"
import CCM2 from "../../assets/img/how-it-work/how-it-works-visual-2.png"
import CCM3 from "../../assets/img/how-it-work/how-it-works-visual-3.png"
import CCM4 from "../../assets/img/how-it-work/how-it-works-visual-4.jpg"

//Style
import "./index.scss"

//? comment permettre le signe du Nº1? du <H1> de (home__slider-content)
//? Svg Play du button de (home__comment content) semble pas fonctionner
//? les images aussi semble cassés...


//TODO: Rendu au carousel


function Home() {

	return (
		<div className="container">
			<div className="home">
				<div className="home__slider">
					<div className="home__slider-content">
						<h1>Le prêt-à-cuisiner Nº1 au Québec!</h1> 
						<h3>Des ingrédients frais de la ferme pour cuisiner de délicieuses recettes, livrés gratuitement à votre porte.</h3>
						<div className="homer__slider-button">
							<Button>Débuter</Button>
						</div>
					</div>
				</div>
				<div className="home__ccm">
					<div className="home__ccm-content">
						<h2 className="home__ccm-title">Comment ça marche</h2>
						<Button vide>Regarder la vidéo{Play}</Button>
					</div>
					<div className="home__ccm-fiches">
						<CommentFiche className="homme__ccm-fiches-1" image={CCM1} title="Nous créons des recettes originales.">
							Notre équipe culinaire utilise des ingrédients de qualité pour créer des menus uniques pour vos déjeuners, vos dîners et vos soupers!
						</CommentFiche>
						<CommentFiche className="homme__ccm-fiches-2" image={CCM2} title="Vous choisissez vos préférences.">
							Choisissez parmi une variété de repas équilibrés et délicieux chaque semaine selon vos préférences.
						</CommentFiche>
						<CommentFiche className="homme__ccm-fiches-3" image={CCM3} title="Nous livrons chaque semaine – gratuitement.">
							Vos ingrédients sont emballés dans nos paniers réfrigérés, pour qu’ils restent frais – même si vous n’êtes pas à la maison.
						</CommentFiche>
						<CommentFiche className="homme__ccm-fiches-4" image={CCM4} title="Vous cuisinez des repas exceptionnels à la maison.">
						Nos recettes sont conçues pour tous les niveaux et styles culinaires : que ce soit un déjeuner prêt en 1 minute ou un délicieux souper fait maison.
						</CommentFiche>
					</div>
				</div>
				<div className="home__carousel">
					<Carousel />
				</div>
			</div>
		</div>
	)
}

export default Home