import { combineReducers } from 'redux'
import auth from './reducers/auth'
import course from './reducers/course'

const rootReducer = combineReducers({
	auth,
	course,
})

export default rootReducer
