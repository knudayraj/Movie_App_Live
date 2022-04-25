import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../actions/movies";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
import { searchValue } from "../actions/movies";
import defaultMovie from '../default-movie.jpg'
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const MoviesCard = (props) => {
    const { sortingData , data } = props
    const [search, setSearch] = useState('')
    const [select, setSelect] = useState('')
    const [ movies, setMovies] = useState('')

    const movie = useSelector((state) => {
        return state.movie
    })

    const dispatch = useDispatch()


    const handleSearch = (e) => {
        let searchItem = e.target.value
        console.log(searchItem)

        const result = movie.filter(e => {
            return e.movieName.includes(searchItem)
        })
        setSearch(searchItem)
        console.log('searched',result)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
    }


    const handleRemove = (id) => {
        console.log(id)
        // console.log('deleted movie',movies)
        const confirmRemove = window.confirm('are you sure ?')
        if(confirmRemove){
            dispatch(removeMovie(id))
        }
    }

    const handleSelect = (e) => {
        console.log('sorting', e.target.value)
        const selectInput = e.target.value
        setSelect(selectInput)
        sortingData(selectInput)
        }
        


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search by name..." name="search" value={search} onChange={handleSearch} />
                <select value={select} name="select" onChange={handleSelect}>
                    <option value="">Order By </option>
                    <option value="asc"> A - Z </option>
                    <option value="dsc"> Z - A </option>
                    <option value="1-100"> 1 - 100 </option>
                    <option value="100-1"> 100 - 1 </option>
                </select>
            </form>
            { data.filter(e => {
                if(search == ''){
                    return e
                } else if(e.movieName.toLowerCase().includes(search.toLocaleLowerCase())){
                    return e
                }
            }).map(e => {
                return <div className="container mt-3">
                    <div className="row">
                        <div className="card col" style={{width: "18rem"}}>
                            <li className="list-group-item" key={e.id}> 
                                <img src={defaultMovie} className="card-img-top" height="30px"  width="30px" />
                                <div className="card-body">
                                    <h5 className="card-title"> IMDB Rank # { e.imdb }   </h5> 
                                    <h4 className="card-text">Movie name - { e.movieName.toUpperCase() } </h4>
                                    <button className="btn-danger" style={{float : "right"}} onClick={() => {
                                        handleRemove(e.id)
                                    }}> Remove </button> 
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}


export default MoviesCard