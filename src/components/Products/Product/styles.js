import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
    },
    media: {
        backgroundImage: 'cover',
        marginLeft: '20%',
        width: '70%',
        height: '100px',
        paddingTop: '56.25%', // 16:9
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100px'
    },
    line:{
        border: ' solid 0.1px',
        width: '100%',
        // color: 'black',
    },

}));