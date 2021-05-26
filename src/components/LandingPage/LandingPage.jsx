import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Typography} from '@material-ui/core';
import useStyles from './styles'

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// Default color is a bright yellow
const DEFAULT_COLOR = 'hsl(50deg, 100%, 50%)';
const generateSparkle = (color = DEFAULT_COLOR) => {
    return {
        id: String(random(10000, 99999)),
        createdAt: Date.now(),
        // Bright yellow color:
        color,
        size: = random(10, 20),
        style: {
        // Pick a random spot in the available space
        top: random(0, 100) + '%',
        left: random(0, 100) + '%',
        // Float sparkles above sibling content
        zIndex: 2,
        },
    }
}




const LandingPage = () => {
    
    const classes = useStyles();

    return (            
        <Container className={classes.goat}>
            <div className={classes.container}>
                <Typography variant='h4'>Welcome to the Goat Shop</Typography>
                <Link to='/goats' className={classes.link}> 
                <Typography variant='h4'>Start Shopping!</Typography>
                </Link>   
            </div>
        </Container>       
    )
}

export default LandingPage;
