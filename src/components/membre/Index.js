// import { Link } from "react-router-dom"
import React, { Component }  from "react"
import "./index.scss"
import Slider from "react-slick";


// TODO: importer les svg des fleches et mettre un height au box comme sur le site
// TODO: fix le map du slider
// TODO: setup le component de memberCard avec la liste

export default class Membre extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
			initialSlide: 0,
			arrows: true, //! comment mettre images?
			draggable: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="membre">
        <h2 className="membre__title">CE QUE DISENT NOS MEMBRES</h2>
				<div className="membre__content">
					<div className="membre__left">
						<div className="membre__moyenne"></div>
					</div>
					<div className="membre__carousel">
						<Slider {...settings}> 
							<div>
								<h3>1</h3>
							</div>
							<div>
								<h3>2</h3>
							</div>
							<div>
								<h3>3</h3>
							</div>
							<div>
								<h3>4</h3>
							</div>
							<div>
								<h3>5</h3>
							</div>
							<div>
								<h3>6</h3>
							</div>
							<div>
								<h3>7</h3>
							</div>
							<div>
								<h3>8</h3>
							</div>
						</Slider>
					</div>
				</div>
      </div>
    );
  }
}