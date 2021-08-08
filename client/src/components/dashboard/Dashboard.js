import React, { useEffect } from 'react'
import {
	Grid,
	makeStyles,
	Typography,
	CircularProgress,
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import BoughtCourses from '../courses/BoughtCourses'
import OnSaleCourses from '../courses/OnSaleCourses'
import { getCourses } from '../../redux/actions/course'
import { Fragment } from 'react'

const useStyles = makeStyles((theme) => ({
	container: {
		// backgroundColor: 'gray',
	},
	spacing: {
		margin: '5px 0',
	},
}))

const Dashboard = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const user = useSelector((state) => state.auth.user)
	const courses = useSelector((state) => state.course.courses)
	// const saved = useSelector((state) => state.auth.user.courses)
	const bought = useSelector((state) => state.course.coursesBought)

	useEffect(async () => {
		dispatch(getCourses())
	}, [])

	return (
		<Grid container justifyContent='center'>
			<Grid
				container
				item
				xs={12}
				md={9}
				lg={6}
				className={classes.container}
				direction='column'
				justifyContent='center'
				alignItems='center'>
				<Grid item>
					<Typography variant='h3'>Bought Courses</Typography>
					{!user ? (
						<Grid container item justifyContent='center'>
							<CircularProgress />
						</Grid>
					) : (
						<Fragment>
							{bought.length === 0
								? null
								: // <Typography variant='subtitle1'>No Couses Purchased</Typography>
								  bought.map((course) => <BoughtCourses course={course} />)}

							{!!user && user.courses.length !== 0
								? user.courses.map((course) => (
										<BoughtCourses course={course} />
								  ))
								: null}
						</Fragment>
					)}
				</Grid>
				<Grid item className={classes.spacing}>
					<Typography variant='h3'>Courses on sale</Typography>
					{courses.map((course) => (
						<OnSaleCourses key={course.id} course={course} />
					))}
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Dashboard
