import { Container } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Comments from '../Comments/Comments';

const useStyles = makeStyles({
    root: {
        maxWidth: 1200,
    },
    media: {
        height: 140,
    },
});

const SinglePost = () => {
    const classes = useStyles();

    const { id } = useParams();

    const [post, setPost] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    
    const styles ={ padding: '10px', backgroundColor: 'pink', margin: '15px'};

    const {title, body} = post;

    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=1`)
        .then(res => res.json())
        .then(data => setComments(data));
    },[])

    return (
        <Container fixed>
            <Card style={styles} className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {body}
          </Typography>
                    </CardContent>
                </CardActionArea>
                <div>
                    <h4>{comments.length} comments</h4>
                    {
                        comments.map(pd => <Comments comments={pd}></Comments>)
                    }
                </div>
                    
            </Card>
        </Container>
    );
};

export default SinglePost;