import { makeStyles} from '@material-ui/core/styles';
// import styled from "styled-components";


export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '100px',
        justifyContent: 'center',
        border: 'solid',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
            },
        backgroundColor: 'white',
    },
    
    goat: {
        width: '20vw',
        height: '30vh',
        margin: '10vh',
        [theme.breakpoints.down('sm')]: {
            width: '40vw',
            height: '30vh',
            },
        // marginRight: '10vh', 
        // marginTop: '10vh',
        // marginBottom: '10vh',
    },
    link:{
        textDecoration: 'none',
        color: 'blue'
    },
    textDiv: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        margin: '10vh',
        backgroundColor: 'white',
        borderRadius: "50%",
        width: '50vw',
    
        
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



