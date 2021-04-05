import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { editItem } from '../../store/actions';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
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

const EditProduct = (props) => {
    const homeProducts = useSelector( state=> state.products);
    const dispatch = useDispatch();

    const notify = () => toast.warn("Product deleted",{
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  })
    
    const handleSubmit = (e,index) =>{
      e.preventDefault();  
  }

    const handleEdit = (index) =>{
      let profile = [];
      
document.querySelectorAll("form").forEach(f => {
  let obj = {

  };
  f.querySelectorAll("input").forEach(ele => obj[ele.name] = ele.value  || "");
  profile.push(obj)
})
console.log(profile)
console.log(index)

      
      dispatch(editItem ({
        profile,index
      })
        
      )
  }

  
    const classes = useStyles();
    

    return(
       
      <>
        <CssBaseline />
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Product Edit
            </Typography>
          <Typography variant="h5" align="center" color="textSecondary" component="p">
            Add effective edit to the product name and pricing for your potential customers.
            </Typography>
        </Container>
        {homeProducts.products ?

          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {homeProducts.products.map((item, index) => (
                <Grid item key={item.id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>

                      <div className="form">

                        <form id="form_id_1" className="formClass" onSubmit={handleSubmit}>
                          <div id="fullname">

                            <input type="text" className="inputClass" name="name" defaultValue={item.name}
                            />
                            <br />
                            <input type="text" className="inputClass" name="price" defaultValue={item.prices[0].price}
                            />
                          </div>
                        </form>
                        <br />
                        <Button variant="primary" type="submit" onClick={() => { handleEdit(index); notify(); }}>
                          Edit Product
                    </Button>


                      </div>
                    </CardContent>
                    <CardActions>
                      {/* <Button size="small" color="primary" onClick={() => { handleSubmit(index); }}>
                          Save
                         </Button> */}

                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>


          : null

        }
      </>
          
        
    )
}

export default EditProduct;

