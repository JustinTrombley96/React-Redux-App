import axios from 'axios';

export const FETCH_MOVIES_START = 'FETCH_MOVIES_START';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAIL = 'FETCH_MOVIES_FAIL';

export const getMovies = () => dispatch => {
	dispatch({ type: FETCH_MOVIES_START });
	axios
		.get('https://pokeapi.co/api/v2/pokemon/')
		.then(res => dispatch({ type: FETCH_MOVIES_SUCCESS, payload: res.data.results }))
		.catch(err => dispatch({ type: FETCH_MOVIES_FAIL, payload: err }));
};
