import axios from 'axios';

import server from '../../../constants/Server';

export const getType = () => {
	return {
		type: 'GET_TYPE',
		payload: axios.get(`${server.api}/types`)
	}
}

export const addType = (body) => {
	return {
		type: 'ADD_TYPE',
		payload: axios({
			method: 'post',
			url: `${server.api}/types`,
			data: body
		})
	}
}

export const updateType = (id, body) => {
	return {
		type: 'UPDATE_TYPE',
		payload: axios({
			method: 'patch',
			url: `${server.api}/types/${id}`,
			data: body
		})
	}
} 

export const deleteType = (id) => {
	return {
		type: 'DELETE_TYPE',
		payload: axios({
			method: 'delete',
			url: `${server.api}/types/${id}`
		})
	}
}