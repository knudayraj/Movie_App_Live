import { useSelector } from "react-redux"
import React from "react";
import MoviesCard from "./MoviesCard";
import MovieStats from "./MovieStats";
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const MovieList = (props) => {

    const movie = useSelector((state) => {
        return state.movie
    })

    const sortingData = (data) => {
        // console.log('sorting data',data)
        if(data == ''){
            return [...movie]
        }
        else if(data === 'asc'){
            const ascending = movie.sort((a,b) => {
                return a.movieName.localeCompare(b.movieName)
            })
            // console.log('ascending', ascending)
        }
        else if(data === 'dsc'){
            const descending = movie.sort((a,b) => {
                return b.movieName.localeCompare(a.movieName)
            })
            // console.log('descending', descending)
        }
        else if(data === '1-100'){
            const ascendingNumber = movie.sort((a,b) => {
                return a.imdb - b.imdb
            })
            // console.log('ascendingNumber', ascendingNumber)
        } 
        else if(data === '100-1'){
            const decendingNumber = movie.sort((a,b) => {
                return b.imdb - a.imdb
            })
            // console.log('decendingNumber', decendingNumber)
        }
    }


    return (
        <div className="row align-items-start">
            { movie.length > 0 ? '': <h1> No movies added </h1> }
            <MovieStats data={movie} />
            <MoviesCard sortingData={sortingData}  data={movie.reverse()} />
        </div>
    )
}

export default MovieList