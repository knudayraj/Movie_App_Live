export const addMovies = (movies) => {
    return {
        type : 'ADD_MOVIES',
        payload : movies
    }
}

export const removeMovie = (id) => {
    return {
        type : 'REMOVE_MOVIE',
        payload : id
    }
}

export const searchValue = (searchInput) => {
    return {
        type : "SEARCH_MOVIE",
        payload : searchInput
    }
}