import React from 'react';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
    const {id} = useParams();
    return (
        
        <div>
            <h1>Single post component:{id}</h1>
        </div>
    );
};

export default SinglePost;