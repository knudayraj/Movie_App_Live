import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const MovieContainer = (props) => {

    return (
        <div className="container">
            <div className="row">
                <MovieList />
                <MovieForm />
            </div>
        </div>
    )
}

export default MovieContainer