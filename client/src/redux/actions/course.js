import axios from 'axios'
import {
	COURSE_ERROR,
	GET_COURSES,
	BUY,
	ADD_COURSE,
	UPDATE_COURSE,
} from './types'

export const getCourses = () => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/xml',
		},
	}
	try {
		console.log(1)
		const res = await axios.get(
			'https://s3-ap-southeast-1.amazonaws.com/he-public-data/courses26269ff',
			config
		)
		console.log(res)
		dispatch({ type: GET_COURSES, payload: res })
		console.log(2)
	} catch (err) {
		console.log(err)
		// dispatch({ type: COURSE_ERROR })
	}
}

export const buy = (data) => async (dispatch) => {
	try {
		dispatch({ type: BUY, payload: data })
	} catch (err) {
		console.log(err)
	}
}

export const boughtCourse = (data) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	}

	const { id } = data

	const body = JSON.stringify({ id })
	try {
		dispatch({ type: ADD_COURSE, payload: data })

		const res = await axios.post('/api/add-course', body, config)

		dispatch({ type: UPDATE_COURSE, payload: res.data })
	} catch (err) {
		console.log(err)
	}
}
