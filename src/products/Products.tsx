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

const Products = (props: { products: ProductType[] }) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {props.products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
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
    </>
  );
};

export default Products;
