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
import Slider1 from "../../assets/img/slider-section/slider-dinner-layer-1.png"
import Slider2 from "../../assets/img/slider-section/slider-dinner-layer-2.png"
import Slider3 from "../../assets/img/slider-section/slider-dinner-layer-3.png"
import Slider4 from "../../assets/img/slider-section/slider-dinner-layer-4.png"

//Style
import "./index.scss"

//? comment permettre le signe du Nº1? du <H1> de (home__slider-content)
//? Svg Play du button de (home__comment content) semble pas fonctionner
//? comment superposer les image?

//! INCAPABLE DE METTRE LA FKING TYPO!!
//TODO: Rendu au carousel
//TODO: fix les images de CCM

function Home() {

	return (
		<div className="container">
			<div className="home">
				<div className="home__slider">
					<img className="home__slider-img1" src={Slider1} alt="slider1" data-animation="bounceInLeft" />
					<img className="home__slider-img2" src={Slider2} alt="slider2" data-animation="bounceInUp" data-animation-exit="bounceOutDown" />
					<div className="home__slider-content">
						<h1 className="home__slider-title">Le prêt-à-cuisiner Nº1 au Québec!</h1> 
						<h3 className="home__slider-text">Des ingrédients frais de la ferme pour cuisiner de délicieuses recettes, livrés gratuitement à votre porte.</h3>
						<div className="home__slider-button">
							<Button className="debuter" to="/debuter">Débuter</Button>
						</div>
					</div>
					<img className="home__slider-img3" src={Slider3} alt="slider3" data-animation="bounceInUp" data-animation-exit="bounceOutDown" />
					<img className="home__slider-img4" src={Slider4} alt="slider4" data-animation="bounceInRight" />						
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