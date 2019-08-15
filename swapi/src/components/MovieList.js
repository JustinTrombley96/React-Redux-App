import React from 'react'
import { connect } from 'react-redux'

import { getMovies } from '../reducers/actions'
import {Button, Label, Image, Reveal, Header} from 'semantic-ui-react'
import  '../index.css'

const MovieList = props => {
    const fetchMovies = e => {
        e.preventDefault()
        props.getMovies()
    }
    return (
        <>
        <Header className="header"as='h1'>Welcome to Hopper's Movie Collection!</Header>
        <div>
            {props.movies.map(movies => (
                <h1><Label as="a" color="black" key={movies.url}><h1>{movies.name}</h1></Label></h1>
            ))}
           
        </div>
        {props.error && <p className="error">{props.error}</p>}
        <Button className="button" secondary onClick={fetchMovies}>Show Hopper's Movies!</Button>
        <Reveal animated='fade'>
        <Reveal.Content visible>
      <Image src='https://seanmcdowell.org/assets/meta_img/Stranger-Things.jpeg' className="Hop-left" size='large' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image className="Hop-left" src='https://vignette.wikia.nocookie.net/strangerthings8338/images/c/c6/ST3_Jim_Hopper_portrait.jpg/revision/latest/scale-to-width-down/2000?cb=20190703002805' size='large' />
    </Reveal.Content>

  </Reveal>
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