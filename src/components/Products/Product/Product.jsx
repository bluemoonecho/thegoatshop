import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'

export default function Product({product, onAddToCart}) {

    
    const classes = useStyles();

    return (
        <Card classsName={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
            <CardContent>
            <hr className={classes.line}></hr>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h6'>
                        {product.price.formatted_with_symbol}
                    </Typography>                   
                    <Typography 
                    dangerouslySetInnerHTML={{ __html: product.description }} 
                    variant='body2' 
                    color='textSecondary'/>
                </div>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <IconButton aria-label='Add to Cart' onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart style={{fontSize : '35px'}}/>
                </IconButton>
            </CardActions>
            
        </Card>
    )
}
//disableSpacing 