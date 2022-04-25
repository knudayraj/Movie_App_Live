import { useDispatch } from 'react-redux'
import React, { useState } from "react";
import { addMovies } from '../actions/movies';
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const MovieForm = (props) => {
    const [movieName, setMovieName] = useState('')
    const [imdb, setImdb] = useState('')

    const dispatch = useDispatch()

    const handleChange = (e) => {
        if(e.target.name === "movieName"){
            setMovieName(e.target.value)
        } else if(e.target.name === "imdb"){
            setImdb(Number(e.target.value))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id : Number(new Date()),
            movieName, 
            imdb
        }
        dispatch(addMovies(formData))
        console.log(formData)
        setMovieName('')
        setImdb('')
    }

    return (
        <div className='col'>
            <h1> Add Movie </h1>
            <form onSubmit={handleSubmit} >
                <input className="form-control" type="text" value={movieName} placeholder="Enter movie name" onChange={handleChange} name="movieName" /> <br />
                <input className="form-control" type="text" value={imdb} placeholder="IMDB Ranking" onChange={handleChange} name="imdb" /> <br />
                <input type="submit" className='btn-primary' value="Add" />
            </form>
        </div>
    )
}

export default MovieForm