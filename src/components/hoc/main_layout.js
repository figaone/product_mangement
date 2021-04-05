import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Box from '@material-ui/core/Box';

const MainLayout = (props) =>{
    return(
        <>
        <CssBaseline />
        <Box mt={5} mb={5}>
        <Container maxWidth="md" component="main" >
            {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
            {props.children}
            <ToastContainer/>
        </Container>
        </Box>
        
        {/* <Container>
            {props.children}
        </Container> */}
        </>
    )
}

export default MainLayout;