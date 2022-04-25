import { createStore, combineReducers } from 'redux'
import MovieReducer from '../reducers/movieReducer'


const configStore = () => {
    const store = createStore(combineReducers({
        movie : MovieReducer
    }))
    return store
}

export default configStore