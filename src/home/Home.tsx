import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import ProductType from "../types/Product";

import {
  Typography,
  CssBaseline,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Container,
  Button,
} from "@material-ui/core";

const Home = (props: { products: ProductType[] }) => {
  return (
    <div data-testid="home-screen">
      <Menu />
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {props.products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {product.name}
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      Exploreaza produse la reducere
      <Footer />
    </div>
  );
};

export default Home;
