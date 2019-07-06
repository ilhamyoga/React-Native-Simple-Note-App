import axios from 'axios';

export const getCategory = () => {
	return{
		type: 'GET_CATEGORY',
		payload: axios.get('http://192.168.6.195:3000/categories')
	}
}

export const addCategory = (name, url) => {
	return{
		type: 'ADD_CATEGORY',
		payload: axios.post('http://192.168.6.195:3000/categories',{
			category:name,
			icon_image:url
		})
	}
}

export const deleteCategory = (id) => {
	return{
		type: 'DEL_CATEGORY',
		payload: axios.delete('http://192.168.6.195:3000/categories/'+id)
	}
}