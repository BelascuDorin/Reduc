import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import ProductType from "../types/Product";

const Home = (props: { products: ProductType[] }) => {
  return (
    <div data-testid="home-screen">
      <Menu />
      Exploreaza produse la reducere
      {props.products.map((p) => (
        <div key={p.id}>
          <h3>{p.name}</h3>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Home;
