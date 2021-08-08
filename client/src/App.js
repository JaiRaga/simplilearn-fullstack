import React, { useEffect, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

// Routes
import PrivateRoute from './components/routing/PrivateRoute'

// Components
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Navbar from './components/layout/Navbar'
import Drawer from './components/layout/Drawer'
import Dashboard from './components/dashboard/Dashboard'
import Checkout from './components/checkout/Checkout'
import Otp from './components/checkout/Otp'

// Redux
import store from './redux/store'
import { loadUser } from './redux/actions/auth'

// utils
import setAuthToken from './utils/setAuthToken'

if (localStorage.token) {
	setAuthToken(localStorage.token)
}

function App() {
	useEffect(() => {
		store.dispatch(loadUser())
	}, [])

	// console.log(moment(moment() + 36e5 * 5).twitter());

	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Navbar />
					<Drawer />

					{/* <Route exact path='/' component={Landing} /> */}

					<Switch>
						<Route exact path='/register' component={Register} />
						<Route exact path='/Login' component={Login} />
						<PrivateRoute exact path='/dashboard' component={Dashboard} />
						<PrivateRoute exact path='/checkout' component={Checkout} />
						<PrivateRoute exact path='/checkout/otp' component={Otp} />
					</Switch>
				</Fragment>
			</Router>
		</Provider>
	)
}

export default App
