import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography} from '@material-ui/core'
import { ShoppingCart, Storefront } from '@material-ui/icons'
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({totalItems}) => {

    const classes = useStyles();
    const location = useLocation();

    return (
    <>
        <AppBar position='fixed' className={classes.appBar} color= 'inherit'>
            <Toolbar>
                <Link to={'/goats'}>
                    <Storefront style={{ height: '30px', margin : '10px', color: 'black'}}/>
                </Link>
                <Typography component={Link} to='/' varient='h6' className={classes.title} color='inherit'> 
                    The Goat Shop 🐐  
                </Typography>
                <div className={classes.grow}/>
                {(location.pathname === '/' || '/goats') && (
                <div className={classes.button}>
                    <IconButton component={Link} to='/cart' aria-label="Show cart items" color='inherit'> 
                        <Badge badgeContent={totalItems} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>)}
            </Toolbar>
        </AppBar>
    </>
    )
}

export default Navbar
