import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { buy } from '../../redux/actions/course'

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		margin: '10px 0',
	},
	media: {
		height: 140,
	},
	price: {
		marginTop: 3,
		marginRight: 5,
	},
	spacing: {
		margin: '0 5px',
	},
})

export default function OnSaleCourses({ course }) {
	const classes = useStyles()
	const dispatch = useDispatch()
	const history = useHistory()

	const buyCourse = () => {
		dispatch(buy(course))

		history.push('/checkout')
	}

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={course.thumbnailURL}
					title={course.title}
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{course.title}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Grid container item justifyContent='flex-end'>
					<Grid item className={classes.price}>
						<Typography variant='subtitle2'>{course.price}</Typography>
					</Grid>
					<Grid item className={classes.spacing}>
						<Button
							size='small'
							color='primary'
							variant='contained'
							onClick={buyCourse}>
							Buy
						</Button>
					</Grid>
				</Grid>
			</CardActions>
		</Card>
	)
}
