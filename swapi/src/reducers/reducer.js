import { FETCH_MOVIES_START, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAIL } from '../reducers/actions';

const initialState = {
	movies     : [],
	error      : '',
	isFetching : false,
};

function reducer(state = initialState, action) {
	console.log('reducer', action);
	switch (action.type) {
		case FETCH_MOVIES_START:
			return {
				...state,
				isFetching : true,
				error      : 'Your action file is missing. Secure the file!',
			};
		case FETCH_MOVIES_SUCCESS:
			return {
				...state,
				movies     : action.payload,
				isFetching : false,
				error      : '',
			};
		case FETCH_MOVIES_FAIL:
			return {
				...state,
				error : action.payload,
			};
		default:
			return state;
	}
}

export default reducer;
