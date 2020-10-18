// import { Link } from "react-router-dom"
import React, { Component }  from "react"
import "./index.scss"
import Slider from "react-slick";
import memberList from "../../assets/list/member"
import MemberCard from "./membreCard";


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
						<Slider className="membre__carousel" {...settings}> 
							{memberList.map(item => {return <MemberCard {...item} />})}
						</Slider>
				</div>
      </div>
    );
  }
}