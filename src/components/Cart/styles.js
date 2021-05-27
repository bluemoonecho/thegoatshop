import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    container:{
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    overflow: 'auto',
    [theme.breakpoints.down('sm')]: {
        // marginLeft: '12%',
        maxWidth:'100%',
        }
    },
    title: {
        marginTop: '5%',
        marginBottom: '5%',
        [theme.breakpoints.down('sm')]: {
            alignSelf: 'center',
            marginLeft: '-20%',
        }
    },
    carts: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '15px',
        backgroundColor: 'red',
    },
    emptyButton: {
        minWidth: '150px',
        [theme.breakpoints.down('xs')]: {
        marginBottom: '5px',
        },
        [theme.breakpoints.up('xs')]: {
            marginRight: '20px'
        }
    },
    checkoutButton: {
        minWidth: '150px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '12%',
            }
        },
    link: {
        textDecoration: 'none',
    },
    cardDetails: {
        display: 'flex',
        marginTop: '10%',
        width: '100%',
        justifyContent: 'space-between',
    },
}));