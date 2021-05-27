import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Typography, CssBaseline} from '@material-ui/core';
import useStyles from './styles'
import Sparkles from './Sparkle'
import Goat from '../../assets/goat-vector.jpeg'


const LandingPage = () => {
    
    const classes = useStyles();

    return (            
        <>
        <CssBaseline/>
        <Container className={classes.mainContainer}>
        <div className={classes.container}>
            <div className={classes.textDiv}>
            <Sparkles>
                <Typography style={{marginBottom: '10px'}}variant='h4'>Welcome to<br/>the Goat Shop</Typography>
            </Sparkles> 
            <Sparkles>      
                <Link to='/goats' className={classes.link}>     
                <Typography variant='h4'>Start Shopping!</Typography>
                </Link> 
            </Sparkles>
            </div>
            <img alt='goat' className={classes.goat} src={Goat}/>
        </div>
        </Container>      
        </> 
    )
}

export default LandingPage;
