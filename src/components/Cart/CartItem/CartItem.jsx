import React from 'react'
import { Typography, Button, Card, CardActions, CardContent,CardMedia, CssBaseline } from '@material-ui/core'
import useStyles from './styles';

const CardItem = ({item, onUpdateCardQty, onRemoveFromCart}) =>  {
    const classes = useStyles();
    
    return (
        <>
        <CssBaseline/>
        <Card className={classes.cartContainer}>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media}></CardMedia>
            <hr className={classes.line}></hr>
            <CardContent className={classes.cartContent}> 
                <Typography variant='h6'>{item.name}</Typography>
                <Typography variant='h7'>{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}> 
                <div className={classes.buttons}> 
                    <Button type='button' size='small' 
                        onClick={()=>onUpdateCardQty(item.id, item.quantity - 1 )}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type='button' size='small' 
                        onClick={()=>onUpdateCardQty(item.id, item.quantity + 1 )}>+</Button>
                </div>
                <Button variant="contained" size='small' type="button" color="secondary" 
                    onClick={()=>onRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
        </>
    )
} 

export default CardItem
 