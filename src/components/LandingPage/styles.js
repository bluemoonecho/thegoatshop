import { makeStyles} from '@material-ui/core/styles';
// import styled from "styled-components";


export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'space-between',
        marginTop: '100px',
        justifyContent: 'center',
        border: 'solid',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
            },
        backgroundColor: 'white',

    },
    
    goat: {
        width: '35vw',
        height: '30vh',
        margin: '10vh',   
    },
    link:{
        textDecoration: 'none',
        color: 'blue'
    },
    textDiv: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        margin: '10vh',
        backgroundColor: 'white',
        borderRadius: "50%",
        width: '270vw',
        
    },
    // container: {
    //     border: "0px solid rgba(255, 255, 255, 1)",
    //     boxShadow: "0px 0px 20px rgba(0, 0, 0, .1)",
    //     borderRadius: "4px",
    //     backgroundColor: "white",
    //     display: "flex",
    //     padding: "16px",
    //     width: "200px"
    // },
    // circle: {
    //     height: "56px",
    //     width: "56px",
    //     borderRadius: "50%"
    // }

}))



