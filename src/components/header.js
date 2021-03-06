import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

// import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    },
  }));
const Header = () => {
    const classes = useStyles();

    return(
        <>
          <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Mpharma
          </Typography>
          <nav>
            <Link component={RouterLink} to="/" variant="button" color="textPrimary"  className={classes.link}>
              Home
            </Link>
            <Link component={RouterLink} to="/add_product" variant="button" color="textPrimary"  className={classes.link}>
              Add new products
            </Link>
            <Link component={RouterLink} to="/delete_product" variant="button" color="textPrimary"  className={classes.link}>
              Delete products 
            </Link>
            <Link component={RouterLink} to="/edit_product" variant="button" color="textPrimary"  className={classes.link}>
              Edit product 
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
        </>
    )
}

export default Header