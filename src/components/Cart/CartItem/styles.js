import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    media: {
        width: '100px',
        height: '100px',
        margin: 'auto',
        padding: '50px',
    },
    cartContainer:{
        width: '260px',
        height: '260px',
    },
    cardContent: {
        display: 'flex',
        margin: '10px',
        alignItems:'center',
        justifyContent: 'center',
    },
    cartActions: {
        justifyContent: 'space-between',
        margin: '10px'
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
    },
}));