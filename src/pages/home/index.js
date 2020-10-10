import React from "react"
import Carousel from "../../components/carousel"
import Button from "../../components/button"
import CcmFiche from "../../components/ccm/fiche"
import Ccm from "../../components/ccm"

//Image
import CCM1 from "../../assets/img/how-it-work/how-it-works-visual-1.png"
import CCM2 from "../../assets/img/how-it-work/how-it-works-visual-2.png"
import CCM3 from "../../assets/img/how-it-work/how-it-works-visual-3.png"
import CCM4 from "../../assets/img/how-it-work/how-it-works-visual-4.png"
import Slider1 from "../../assets/img/slider-section/slider-dinner-layer-1.png"
import Slider2 from "../../assets/img/slider-section/slider-dinner-layer-2.png"
import Slider3 from "../../assets/img/slider-section/slider-dinner-layer-3.png"
import Slider4 from "../../assets/img/slider-section/slider-dinner-layer-4.png"

//Style
import "./index.scss"
import Membre from "../../components/membre/index"
import Engagement from "../../components/engagement"

import Example from "./example.js"

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
				<Ccm
					header={
						<React.Fragment>
							<h2 className="home__ccm-title">Comment ça marche</h2>
							<Button vide className="home__play"> 
								<span>Regarder la vidéo</span> 
								<svg version="1.1" id="play" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="40px" width="40px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" >
									<path class="stroke-solid" fill="none" stroke="#0B4652" d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7 C97.3,23.7,75.7,2.3,49.9,2.5"></path>
									<path class="stroke-dotted" fill="none" stroke="#0B4652" d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7 C97.3,23.7,75.7,2.3,49.9,2.5"></path>
									<path class="icon" fill="#0B4652" d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"></path>
								</svg>							
							</Button>
						</React.Fragment>
					}
				>
					<CcmFiche className="ccm__fiche" image={CCM1} alt="fiche 1" title="Nous créons des recettes originales.">
						<p>Notre équipe culinaire utilise des ingrédients de qualité pour créer des menus uniques pour vos déjeuners, vos dîners et vos soupers!</p>
					</CcmFiche>
					<CcmFiche className="ccm__fiche" image={CCM2} alt="fiche 2" title="Vous choisissez vos préférences.">
						<p>Choisissez parmi une variété de repas équilibrés et délicieux chaque semaine selon vos préférences.</p>
					</CcmFiche>
					<CcmFiche className="ccm__fiche" image={CCM3} alt="fiche 3" title="Nous livrons chaque semaine – gratuitement.">
						<p>Vos ingrédients sont emballés dans nos paniers réfrigérés, pour qu’ils restent frais – même si vous n’êtes pas à la maison.</p>
					</CcmFiche>
					<CcmFiche className="ccm__fiche" image={CCM4} alt="fiche 4" title="Vous cuisinez des repas exceptionnels à la maison.">
						<p>Nos recettes sont conçues pour tous les niveaux et styles culinaires : que ce soit un déjeuner prêt en 1 minute ou un délicieux souper fait maison.</p>
					</CcmFiche>
				</Ccm>
				<div className="home__carousel">
					<Carousel />
				</div>
				<div className="home__membre">
					<Membre />
					<Engagement />
					<Example />
				</div>
			</div>
		</div>
	)
}

export default Home