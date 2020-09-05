import { Container } from '@material-ui/core';
import React from 'react';
import './Posts.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    maxWidth: 1200,
  },
  media: {
    height: 140,
  },
});
const Posts = (props) => {
    const classes = useStyles();
    const { title, body, id } = props.posts;
    console.log(props.posts);
    const styles ={ padding: '10px', backgroundColor: 'pink', margin: '15px'}
    return (
        <Container fixed >
                <Card style={styles}  className={classes.root} >
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
                    <CardActions>
                    <Button variant="contained" color="secondary">
                         See Details
                    </Button>
                        
                    </CardActions>
                </Card>
        </Container>

    );
};

export default Posts;