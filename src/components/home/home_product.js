import React from 'react';
import { useSelector } from 'react-redux';



import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
      padding: theme.spacing(6),
    },
  }));

const HomeProducts = (props) => {
    const homeProducts = useSelector( state=> state.products);
    
    console.log("Products: ", homeProducts);
    
   const classes = useStyles();
    

    return(
       
         <>
         <CssBaseline />
            {homeProducts.products ?
               
               <Container className={classes.cardGrid} maxWidth="md">
               {/* End hero unit */}
               <Grid container spacing={4}>
                 {homeProducts.products.map((item) => (
                   <Grid item key={item.id} xs={12} sm={6} md={4}>
                     <Card className={classes.card}>
                       <CardMedia
                         className={classes.cardMedia}
                         image="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                         title="Image title"
                       />
                       <CardContent className={classes.cardContent}>
                         <Typography gutterBottom variant="h5" component="h2">
                         {item.name}
                         </Typography>
                         <Typography>
                         ${item.prices[0].price}
                         </Typography>
                       </CardContent>
                     </Card>
                   </Grid>
                 ))}
               </Grid>
             </Container>
               

            :null

            }
         </>
          
        
    )
}

export default HomeProducts;