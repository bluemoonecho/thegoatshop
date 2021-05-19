import React from 'react'
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles'

const products = [
    {
    id: 1,
    name: 'Shoes',
    description: 'Running Shoes',
    price: '$5',
    image: 'https://img01.ztat.net/article/spp-media-p1/d6a430bae7ce4db6adf2534010347f3c/52f062d4ade24604a8f431ed04fb42a0.jpg?imwidth=1800&filter=packshot',
    },
    {
    id: 2,
    name: 'Macbook',
    description: 'Apple Macbook',
    price: '$10',
    image: 'https://media.wired.com/photos/5fb2cc575c9914713ead03de/master/w_2560%2Cc_limit/Gear-Apple-MacBook-Air-top-down-SOURCE-Apple.jpg',
    }
]  

const Products = () => { 
    
    const classes = useStyles();
    
    return (
    <main className={classes.content}>
    <div className={classes.toolbar}/>
        <Grid container justify='center' spacing={4}> 
            {products.map(product => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    )
}


export default Products;