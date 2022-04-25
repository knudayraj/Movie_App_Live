const movieInitialState = []

const MovieReducer = (state = movieInitialState, action) => {
    switch(action.type){
        case "ADD_MOVIES" : {
            return [...state, {...action.payload}]
        }
        case "REMOVE_MOVIE" : {
            return state.filter(e => {
                if(e.id != action.payload){
                    return {...e}
                    console.log(action.payload)
                }
            })
        }
        case "SEARCH_MOVIE" : {
            return state.filter(e => {
                if(e.movieName.includes(action.payload)){
                    return {...e}
                } 
            })
        }
        default : {
            return [...state]
        }
    }
}

export default MovieReducer