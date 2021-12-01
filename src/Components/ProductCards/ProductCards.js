import React,{useContext, useState} from "react";
import {
  Card,
  Img,
  Title,
  EditButton,
  DeleteButton,
  Price,
} from "./ProductCards.elements";
import EditModal from './EditProductForm';
import { AdminContext } from "../../ContextAPI/AdminProvider";
const ProductCards = ({ url, title, price, id }) => {
  const [showEditProduct, setShowEditProduct] = useState(false);
  const [isProductEdited, SetProductEdited] = useState(false);
  const [isAdmin]=useContext(AdminContext)

  const openEditModal = () => {
    setShowEditProduct((prev) => !prev);
    SetProductEdited(false);
  };
  const DeleteProduct = (id) => {
    fetch(`http://localhost:9000/product/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log("removed");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  
const AdminView=(<Card>
  <Img src={url} />
  <Title>{title}</Title>
  <Price>{price}</Price>
  <EditButton onClick={openEditModal}>Edit</EditButton>
  <EditModal
    showModal={showEditProduct}
    setShowModal={setShowEditProduct}
    isProductEdited={isProductEdited}
    SetProductEdited={SetProductEdited}
    id={id}
  />
  <DeleteButton onClick={() => DeleteProduct(id)}>
    Delete
  </DeleteButton>
</Card>);
const UserView =(
  <Card>
        <Img src={url} />
        <Title>{title}</Title>
        <Price>{price}</Price>
        <EditButton>View</EditButton>
      </Card>
);
  return (
    <div>
     {AdminView}
     {/* {console.log(isAdmin)}
     { isAdmin ? AdminView : UserView} */}
    </div>
  );
};

export default ProductCards;
