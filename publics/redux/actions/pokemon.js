import axios from 'axios';

import server from '../../../constants/Server';

export const getPokemon = (body) => {
	return {
		type: 'GET_POKEMON',
		payload: axios({
			method: 'get',
			url: `${server.api}/pokemons`,
			data: body
		})
	}
}

export const getDetailPokemon = (id) => {
	return {
		type: 'GET_DETAIL_POKEMON',
		payload: axios({
			method: 'get',
			url: `${server.api}/pokemons/${id}`
		})
	}	
}

export const addPokemon = (token, body) => {
	return {
		type: 'ADD_POKEMON',
		payload: axios({
			method: 'post',
			url: `${server.api}/pokemons`,
			data: body,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}

export const updatePokemon = (id, token, body) => {
	return {
		type: 'UPDATE_POKEMON',
		payload: axios({
			method: 'patch',
			url: `${server.api}/pokemons/${id}`,
			data: body,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
} 

export const deletePokemon = (id, token) => {
	return {
		type: 'DELETE_POKEMON',
		payload: axios({
			method: 'delete',
			url: `${server.api}/pokemons/${id}`,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}

export const deletePokemonLocal = (id) => {
	return {
		type: 'DELETE_POKEMON_LOCAL',
		payload: id
	}
}