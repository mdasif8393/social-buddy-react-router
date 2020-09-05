import React from 'react';
import './Comments.css'
const Comments = (props) => {
    const {name, email, body} = props.comments;
    console.log(props.comments)
    return (
        <div className="comments-style">
            <h4>Name: {name}</h4>
            <p>Email <small>{email} </small> </p>
            <p>Comment: {body}</p>
        </div>
    );
};

export default Comments;