import { Button, Container } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Posts from '../Posts/Posts';
import './Home.css'

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect (() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <Container fixed>
            {
                posts.map(pd => <Posts posts={pd}></Posts>)
            }
        </Container>
        
    );
};

export default Home;