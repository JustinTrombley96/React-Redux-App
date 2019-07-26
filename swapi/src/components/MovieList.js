import React from 'react'
import { connect } from 'react-redux'

import { getMovies } from '../reducers/actions'

const MovieList = props => {
    const fetchMovies = e => {
        e.preventDefault()
        props.getMovies()
    }
    return (
        <>
        <h1>Welcome to Hopper's Movie Collection!</h1>
        <div>
            {props.movies.map(movies => (
                <h4 key={movies.url}>{movies.name}</h4>
            ))}
        </div>
        {props.error && <p className="error">{props.error}</p>}
        <button onClick={fetchMovies}>Show Hopper's Movies!</button>
        </>
    )
}

const mapStateToProps = state => ({
    movies: state.movies,
    error: state.error,
    isFetching: state.isFetching
})
export default connect(
    mapStateToProps,
    {getMovies}
)(MovieList)