const initialState = {
	auth: [],
	isLogin: false,
	isLoading: false,
}

export default auth = (state = initialState, action) => {
	switch(action.type) {
		case 'GET_STATUS_PENDING':
			return {
				...state,
				isLoading: true,
				isLogin: false,
			}

		case 'GET_STATUS_REJECTED':
			return {
				...state,
				isLoading: false,
				isLogin: false
			}

		case 'GET_STATUS_FULFILLED':
			return {
				...state,
				isLoading: false,
				isLogin: true
			}

		case 'POST_LOGIN_PENDING':
			return {
				...state,
				isLoading: true,
				isLogin: false
			}

		case 'POST_LOGIN_REJECTED':
			return {
				...state,
				isLoading: false,
				isLogin: false
			}

		case 'POST_LOGIN_FULFILLED':
			return {
				...state,
				isLoading: false,
				isLogin: true,
				auth: action.payload.data
			}

		case 'POST_REGISTER_PENDING':
			return {
				...state,
				isLoading: true,
				isLogin: false
			}

		case 'POST_REGISTER_REJECTED':
			return {
				...state,
				isLoading: false,
				isLogin: false
			}

		case 'POST_REGISTER_FULFILLED':
			return {
				...state,
				isLoading: false,
				isLogin: true,
				auth: action.payload.data
			}

		default: 
			return state;
	}
}