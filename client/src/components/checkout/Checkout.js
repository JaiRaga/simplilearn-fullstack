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

const Checkout = () => {
	const classes = useStyles()

	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
	const dispatch = useDispatch()
	const history = useHistory()

	const [carddata, setCarddata] = useState({
		cardname: '',
		cardnum: '',
		securitynum: '',
	})

	const { email, password } = carddata

	const onChange = (e) => {
		setCarddata({ ...carddata, [e.target.name]: e.target.value })
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
					<form className={classes.root}>
						<Grid item>
							<TextField
								id='cardname'
								name='cardname'
								label='cardname'
								variant='outlined'
								onChange={onChange}
							/>
						</Grid>
						<Grid item>
							<TextField
								id='cardnum'
								name='cardnum'
								label='cardnum'
								variant='outlined'
								type='number'
								onChange={onChange}
							/>
						</Grid>
						<Grid item>
							<TextField
								id='securitynum'
								name='securitynum'
								label='securitynum'
								variant='outlined'
								type='number'
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
						onClick={() => history.push('/checkout/otp')}>
						Buy Course
					</Button>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Checkout
