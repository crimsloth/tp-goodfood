import React from "react"
import { Link } from "react-router-dom"

// Style
import "./index.scss"

// images
import footerFacebook from "../../assets/img/contact/facebook-logo.png"
import footerInstagram from "../../assets/img/contact/instagram-logo.png"

function Footer() {
	return (
		<div className="footer">
			<div className="footer__box">
				<div className="footer__list">
					<h5 className="footer__title">NAVIGUER</h5>
					<div className="footer__column">
						<Link className="footer__link" to="/">Accueil</Link>
						<Link className="footer__link" to="/menu">Au menu</Link>
						<Link className="footer__link" to="/prix">Prix</Link>
						<Link className="footer__link" to="/wow">Goodfood WOW</Link>
						<Link className="footer__link" to="/carrieres">On embauche!</Link>
						<Link className="footer__link" to="/histoire">Notre histoire</Link>
					</div>
					<div className="footer__column">
						<Link className="footer__link" to="/blog">Blog</Link>
						<Link className="footer__link" to="/faq">FAQ</Link>
						<Link className="footer__link" to="/ingredients">Nos ingrédients</Link>
						<Link className="footer__link" to="/engagement">Notre Engagement</Link>
						<Link className="footer__link" to="/cadeaux">Cartes cadeaux</Link>
					</div>
					<div className="footer__column">
						<Link className="footer__link" to="/press">Presse</Link>
						<Link className="footer__link" to="/conditions">Conditions d'utilisation</Link>
						<Link className="footer__link" to="/modalites">Modalités et conditions d'achat</Link>
						<Link className="footer__link" to="/investisseurs">Investisseurs</Link>
					</div>
				</div>
				<div className="footer__info">	
					<div className="footer__questions">
						<div className="footer__contact">
							<h5 className="footer__title">QUESTIONS ?</h5>
							<p>1(855) 515-5191</p>
							<p>chef@marchegoodfood.ca</p>
						</div>
						<div className="footer__followUs">
							<h5 className="footer__title">SUIVEZ-NOUS</h5>
							<Link className="footer__facebook" to="/facebook"><img src={footerFacebook} alt="facebook" /></Link>
							<Link className="footer__instagram" to="/instagram"><img src={footerInstagram} alt="instagram" /></Link>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__legal">
				<p className="footer__copyright">Copyright © 2020 Goodfood.</p>
				<Link className="footer__politique" to="/politique">Politique de confidentialité</Link>
			</div>
		</div>
	)
}

export default Footer
