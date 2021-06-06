import Menu from './menu/Menu';
import Footer from './footer/Footer';
import './App.css';

import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from '@material-ui/core';
import {PhotoCamera} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className='App'>
      <>
        <CssBaseline />
        <AppBar position='relative'>
          <Toolbar>
            <PhotoCamera />
            <Typography variant='h6'>Photo Album</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.container}>
            <Container maxWidth='sm'>
              <Typography
                variant='h2'
                align='center'
                color='textPrimary'
                gutterBottom
              >
                Photo Album
              </Typography>
              <Typography
                variant='h5'
                align='center'
                color='textSecondary'
                paragraph
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis incidunt dignissimos dicta fugit ratione libero
                inventore ad harum vero consectetur?
              </Typography>
              <div>
                <Grid container spacing={2} justify='center'>
                  <Grid item>
                    <Button variant='contained' color='primary'>
                      See my photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant='outlined' color='primary'>
                      Secondary action
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
        </main>
      </>
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
