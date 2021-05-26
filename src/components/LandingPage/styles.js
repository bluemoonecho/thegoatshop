import { makeStyles} from '@material-ui/core/styles';
import Goat from '../../assets/Goat.jpeg'


export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    background: {
        marginTop: '10%',
        backgroundColor: '#f7f7f7',
    },
    link:{
        textDecoration: 'none'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        margin: '30vh',
        backgroundColor: 'white',
        opacity: '0.1',
        width: '70vw'
    },

    goat: {
        position: 'absolute',
        marginTop: '10%',
        backgroundImage: `url(${ Goat })`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',  
        height: '70vh'  
    }

}))