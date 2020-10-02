import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Style 
import "./index.scss"


//-------------------------------------
// const useStyles = makeStyles({
// 	root: {
// 		width: 500,
// 	},
// 	media: {
// 		height: 328,
// 	},
// });
//*backup
//-------------------------------------

//TODO: gerer la hauteur des box du carousel, voir le content avec title (min-height?)


export default function MediaCard(props) {
	// const classes = useStyles();

	let type = props.type || "";
	let title = props.title || "";
	let image = props.image || "";
	let content = props.content || "";


	// className={classes.root}
	// className={classes.media}
	
	return (
		<Card className="card">
			<CardActionArea>
				<CardMedia
					className="card__carousel"
					image={image}
					title={title}
					type={type}
				/> 
				<CardContent>
					<Typography className="card__title" gutterBottom variant="h5" component="h3">{title}</Typography> {/* TITLE */}
					<Typography className="card__content" variant="body2" color="textSecondary" component="p"> {content} </Typography> {/* CONTENT */}
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">Share</Button> {/* LEFT TEXT */}
				<Button size="small" color="primary">Learn More</Button> {/* BUTTON (VIDE) */}
			</CardActions>
		</Card>
	);
}