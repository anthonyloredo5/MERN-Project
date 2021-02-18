import axios from 'axios';

const url = '/posts';

//init home route using axios
export const fetchPosts = () => axios.get(url);
//create POST route
export const createPost = (newPost) => axios.post(url, newPost);
//update/edit post route
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);