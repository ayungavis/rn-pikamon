const initialState = {
	data: [],
	item: {},
	isLoading: false,
}

export default pokemons = (state = initialState, action) => {
	switch(action.type) {
		case 'GET_POKEMON_PENDING':
			return {
				...state,
				isLoading: true
			}

		case 'GET_POKEMON_REJECTED':
			return {
				...state,
				isLoading: false
			}

		case 'GET_POKEMON_FULFILLED':
			return {
				...state,
				isLoading: false,
				data: action.payload.data,
			}

		case 'GET_DETAIL_POKEMON_PENDING':
			return {
				...state,
				isLoading: true
			}

		case 'GET_DETAIL_POKEMON_REJECTED':
			return {
				...state,
				isLoading: false
			}

		case 'GET_DETAIL_POKEMON_FULFILLED':
			return {
				...state,
				isLoading: false,
				item: action.payload.data,
			}

		case 'ADD_POKEMON_PENDING': 
			return {
				...state,
				isLoading: true
			}

		case 'ADD_POKEMON_REJECTED': 
			return {
				...state,
				isLoading: false
			}

		case 'ADD_POKEMON_FULFILLED': 
			return {
				...state,
				isLoading: false,
				data: [...state, action.payload.data]
			}

		case 'UPDATE_POKEMON_PENDING':
			return {
				...state,
				isLoading: true,
			}

		case 'UPDATE_POKEMON_REJECTED':
			return {
				...state,
				isLoading: false,
			}

		case 'UPDATE_POKEMON_FULFILLED':
			return {
				...state,
				isLoading: false,
				data: [...state, action.payload.data]
			}

		case 'DELETE_POKEMON_PENDING': 
			return {
				...state,
				isLoading: true,
			}

		case 'DELETE_POKEMON_REJECTED':
			return {
				...state,
				isLoading: false,
			}

		case 'DELETE_POKEMON_FULFILLED':
			return {
				...state,
				isLoading: false,
			}

		case 'DELETE_POKEMON_LOCAL':
			const newPokemonAfterDelete = state.data.filter(data => data.id != action.payload.id)
			return {...state, data: newPokemonAfterDelete, isLoading: false};

		default:
			return state;
	}
}