import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import movie from './Movie.svg'
// D:\DCT\Movie App\movie-app\src\components\Movie.svg

const MovieStats = (props) => {
    const { data } = props
    const [topRanked, setTopRanked] = useState('')

    console.log(data)

    useEffect(()=>{
        if (data.length > 0) {
            const result = data.reduce(function(prev, current) {
                return (prev.imdb < current.imdb) ? prev : current
            })
            setTopRanked(result)
        }
    }, [data])


    return (
        <div className="container" >
            <div className="row">
                {/* <div className="col">
                    <img src={movie} />
                </div> */}
                <div className="col mt-3 mb-3">
                    <div className="card text-white bg-dark mb-3">
                    <div className="card-header">Total Movie - {data.length} </div>
                        { data.length > 0 ? <h5 className="card-title">Top Ranked Movie - {topRanked.movieName } </h5> : '' }
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default MovieStats