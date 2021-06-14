import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import ProductType from "../types/Product";

const Home = (props: { products: ProductType[] }) => {
  return (
    <div data-testid="home-screen">
      <Menu />
      Exploreaza produse la reducere Cartofi
      <Footer />
    </div>
  );
};

export default Home;
