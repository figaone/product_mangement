import React from 'react';

//material ui imports
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#/">
          figauiweb
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(3),
    },
  }));

const Footer = (props) => {
    
    
    
    
   const classes = useStyles();
    

    return(
       
         <>
         <CssBaseline />
         <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Product Management App 
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Made with love!
        </Typography>
        <Copyright />
      </footer>
         </>
          
        
    )
}

export default Footer;