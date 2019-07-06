import axios from 'axios';

export const getNotes = (search= '', sort= 'DESC') => {
	return{
		type: 'GET_NOTES',
		payload: axios.get('http://192.168.6.195:3000/notes?search='+search+'&sort='+sort)
	}
}

export const getLoadData = (page, sort='DESC') => {
	return{
		type: 'GET_LOAD',
		payload: axios.get('http://192.168.6.195:3000/notes?page='+page+'&sort='+sort)
	}
}

export const getByCategory = (id) => {
	return{
		type: 'GET_BYCATEGORY',
		payload: axios.get('http://192.168.6.195:3000/categories/'+id)
	}
}

export const addNote = (title, note, category_id) => {
	return{
		type: 'ADD_NOTE',
		payload: axios.post('http://192.168.6.195:3000/notes',{
			title: title,
			note: note,
			category: parseInt(category_id)
		})
	}
}

export const updateNote = (id, title, note, category_id) => {
	return{
		type: 'EDIT_NOTE',
		payload: axios.put('http://192.168.6.195:3000/notes/'+id,{
			title: title,
			note: note,
			category: parseInt(category_id)
		})
	}
}

export const deleteNote = (id) => {
	return{
		type: 'DEL_NOTE',
		payload: axios.delete('http://192.168.6.195:3000/notes/'+id)
	}
}