import React from 'react'
import MovieContainer from './components/MovieContainer'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () => {

  return (
    <div className='container'>
        <h1> My Big Movie List </h1>
        <MovieContainer />
    </div>
  )
}

export default App