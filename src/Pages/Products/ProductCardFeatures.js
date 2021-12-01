import Cement from "../../images/Cement.jpg";
import concreatbricks from "../../images/concreatbricks.jpg";
import concreateStones from "../../images/concreateStones.jpg";
import RiverSand from "../../images/RiverSand.jpg";
import SteelRods from "../../images/SteelRods.jpg";
import ProductCards from "../../Components/ProductCards/ProductCards";

import { ProductContainer } from "../../Components/ProductCards/ProductCards.elements";

const AllProducts = (props) => {
  const { products, isLoading } = props;

  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <ProductContainer>
      {!isLoading &&
        products.map((product) => {
          const features = {
            id:product._id,
            url:product.url,
            title: product.name,
            price: product.price,
            
          };
          return <ProductCards {...features} />;
        })}
    </ProductContainer>
  );
};

export default AllProducts;


