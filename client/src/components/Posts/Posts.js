import React from 'react';
import Post from './Post/Post.js';
import useStyles from './styles.js';
import { useSelector } from 'react-redux';

const Posts = () => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    console.log(posts);

    return(
        //react fragment
        <>
        <h1>Posts</h1>
        <Post/>
        <Post/>
        <Post/>
        </>
    );
}

export default Posts;