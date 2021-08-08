import React from 'react'
import axios from 'axios'
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	USER_LOADED,
	AUTH_ERROR,
} from './types'
import setAuthToken from '../../utils/setAuthToken'

// Load User
export const loadUser = () => async (dispatch) => {
	if (localStorage.token) {
		setAuthToken(localStorage.token)
	}

	try {
		const res = await axios.get('/api/user/me')

		dispatch({
			type: USER_LOADED,
			payload: res.data,
		})
	} catch (err) {
		dispatch({ type: AUTH_ERROR })
	}
}

// Register User
export const registerUser =
	({ username, handle, email, password }) =>
	async (dispatch) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}

		const body = JSON.stringify({ username, handle, email, password })

		try {
			const res = await axios.post('/api/register', body, config)
			console.log(res)
			dispatch({ type: REGISTER_SUCCESS, payload: res.data })
			dispatch(loadUser())
		} catch (err) {
			dispatch({ REGISTER_FAIL })
		}
	}

// Login User
export const login = (email, password) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	}

	const body = JSON.stringify({ email, password })

	try {
		const res = await axios.post('/api/login', body, config)

		dispatch({ type: LOGIN_SUCCESS, payload: res.data })
		// dispatch(loadUser())
	} catch (err) {
		dispatch({ type: LOGIN_FAIL })
	}
}

// Logout user
export const logout = () => async (dispatch) => {
	dispatch({ type: LOGOUT })
}
