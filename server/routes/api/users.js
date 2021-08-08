const express = require('express')
const User = require('../../models/User')
const auth = require('../../middleware/auth')
const router = express.Router()

router.post('/register', async (req, res) => {
	const user = new User(req.body)

	try {
		await user.save()
		const token = await user.generateAuthToken()
		res.status(201).send({ user, token })
	} catch (e) {
		res.status(400).send(e)
	}
})

router.post('/login', async (req, res) => {
	try {
		const user = await User.findByCredentials(req.body.email, req.body.password)
		const token = await user.generateAuthToken()
		res.send({ user, token })
	} catch (e) {
		res.status(400).send('Unable to Login!')
	}
})

// Get my profile
router.get('/user/me', auth, async (req, res) => {
	res.send(req.user)
})

// Add Course
router.post('/add-course', auth, async (req, res) => {
	try {
		console.log(1)
		const id = req.body.id
		console.log(2)
		req.user.courses.push(id)
		console.log(3)
		await req.user.save()
		console.log(4)
		res.send(req.user.courses)
	} catch (err) {
		res.status(500).send('Internal server error')
	}
})

module.exports = router
