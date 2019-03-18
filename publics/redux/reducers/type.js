const initialState = {
	data: [],
	isLoading: false,
}

export default types = (state = initialState, action) => {
	switch(action.type) {
		case 'GET_TYPE_PENDING':
			return {
				...state,
				isLoading: true
			}

		case 'GET_TYPE_REJECTED':
			return {
				...state,
				isLoading: false
			}

		case 'GET_TYPE_FULFILLED':
			return {
				...state,
				isLoading: false,
				data: action.payload.data,
				length: action.payload.data.length
			}

		case 'ADD_TYPE_PENDING': 
			return {
				...state,
				isLoading: true
			}

		case 'ADD_TYPE_REJECTED': 
			return {
				...state,
				isLoading: false
			}

		case 'ADD_TYPE_FULFILLED': 
			return {
				...state,
				isLoading: false,
				data: [...state, action.payload.data]
			}

		case 'UPDATE_TYPE_PENDING':
			return {
				...state,
				isLoading: true,
			}

		case 'UPDATE_TYPE_REJECTED':
			return {
				...state,
				isLoading: false,
			}

		case 'UPDATE_TYPE_FULFILLED':
			return {
				...state,
				isLoading: false,
				// data: [...state, action.payload.data]
			}

		case 'DELETE_TYPE_PENDING': 
			return {
				...state,
				isLoading: true,
			}

		case 'DELETE_TYPE_REJECTED':
			return {
				...state,
				isLoading: false,
			}

		case 'DELETE_TYPE_FULFILLED':
			return {
				...state,
				isLoading: false,
			}

		default:
			return state;
	}
}