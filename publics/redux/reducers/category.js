const initialState = {
	data: [],
	isLoading: false,
}

export default categories = (state = initialState, action) => {
	switch(action.type) {
		case 'GET_CATEGORY_PENDING':
			return {
				...state,
				isLoading: true
			}

		case 'GET_CATEGORY_REJECTED':
			return {
				...state,
				isLoading: false
			}

		case 'GET_CATEGORY_FULFILLED':
			return {
				...state,
				isLoading: false,
				data: action.payload.data,
				length: action.payload.data.length
			}

		case 'ADD_CATEGORY_PENDING': 
			return {
				...state,
				isLoading: true
			}

		case 'ADD_CATEGORY_REJECTED': 
			return {
				...state,
				isLoading: false
			}

		case 'ADD_CATEGORY_FULFILLED': 
			return {
				...state,
				isLoading: false,
				data: [...state, action.payload.data]
			}

		case 'UPDATE_CATEGORY_PENDING':
			return {
				...state,
				isLoading: true,
			}

		case 'UPDATE_CATEGORY_REJECTED':
			return {
				...state,
				isLoading: false,
			}

		case 'UPDATE_CATEGORY_FULFILLED':
			return {
				...state,
				isLoading: false,
				// data: [...state, action.payload.data]
			}

		case 'DELETE_CATEGORY_PENDING': 
			return {
				...state,
				isLoading: true,
			}

		case 'DELETE_CATEGORY_REJECTED':
			return {
				...state,
				isLoading: false,
			}

		case 'DELETE_CATEGORY_FULFILLED':
			return {
				...state,
				isLoading: false,
			}

		default:
			return state;
	}
}