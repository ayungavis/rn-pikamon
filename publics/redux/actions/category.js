import axios from 'axios';

import server from '../../../constants/Server';

export const getCategory = () => {
	return {
		type: 'GET_CATEGORY',
		payload: axios.get(`${server.api}/categories`)
	}
}

export const addCategory = (body) => {
	return {
		type: 'ADD_CATEGORY',
		payload: axios({
			method: 'post',
			url: `${server.api}/categories`,
			data: body
		})
	}
}

export const updateCategory = (id, body) => {
	return {
		type: 'UPDATE_CATEGORY',
		payload: axios({
			method: 'patch',
			url: `${server.api}/categories/${id}`,
			data: body
		})
	}
} 

export const deleteCategory = (id) => {
	return {
		type: 'DELETE_CATEGORY',
		payload: axios({
			method: 'delete',
			url: `${server.api}/categories/${id}`
		})
	}
}