import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	makeStyles,
	Grid,
	TextField,
	Button,
	Typography,
} from '@material-ui/core'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { boughtCourse } from '../../redux/actions/course'

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
	loginContainer: {
		marginTop: '20px',
	},
}))

const Otp = () => {
	const classes = useStyles()
	const history = useHistory()
	const course = useSelector((state) => state.course.checkout)
	const dispatch = useDispatch()

	const [otpState, setOtpState] = useState({
		otp: '',
	})

	const onChange = (e) => {
		setOtpState({ ...otpState, [e.target.name]: e.target.value })
	}

	const onSubmit = (e) => {
		e.preventDefault()
		console.log(otpState.otp)
		if (otpState.otp === '123456') {
			dispatch(boughtCourse(course))
		}
		history.push('/dashboard')
	}

	return (
		<Grid container justifyContent='center' alignItems='center'>
			<Grid
				className={classes.loginContainer}
				container
				item
				xs={6}
				direction='column'
				justifyContent='center'
				alignItems='center'>
				<Grid item>
					<Typography variant='h5'>Login</Typography>
				</Grid>
				<Grid
					container
					item
					display='column'
					justifyContent='center'
					alignItems='center'>
					<form className={classes.root} onSubmit={onSubmit}>
						<Grid item>
							<TextField
								id='otp'
								name='otp'
								label='otp'
								variant='outlined'
								onChange={onChange}
							/>
						</Grid>
					</form>
				</Grid>
				<Grid item>
					<Button
						type='submit'
						color='primary'
						variant='contained'
						onClick={onSubmit}>
						submit
					</Button>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Otp
