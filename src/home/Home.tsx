import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import ProductType from "../types/Product";
import Products from "../products/Products";

const Home = (props: { products: ProductType[] }) => {
  return (
    <div data-testid="home-screen">
      <Menu />
      Exploreaza produse la reducere
      <Products products={props.products} />
      <Footer />
    </div>
  );
};

export default Home;
