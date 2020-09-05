import { Avatar } from '@material-ui/core';
import React from 'react';
import './Comments.css'

const Comments = (props) => {
    const {name, email, body, id} = props.comments;

    return (
        <div className="comments-style">

            <div className="image-style">
                <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/med/men/18.jpg" />
            </div>

            <div>
                <p> <span className="title-style">Name:</span>  {name}</p>
                <p> <span className="title-style">Email:</span> {email}  </p>
                <p> <span className="title-style">Comment:</span> {body}</p>
            </div>
            
        </div>
    );
};
export default Comments;