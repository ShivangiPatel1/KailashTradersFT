import React, { useContext, useState, useEffect } from "react";
import {
  Card,
  Img,
  Title,
  EditButton,
  DeleteButton,
  Price,
} from "./ProductCards.elements";
import EditModal from "./EditProductForm";
import { AdminContext } from "../../ContextAPI/AdminProvider";
const ProductCards = ({ url, title, price, id }) => {
  const [showEditProduct, setShowEditProduct] = useState(false);
  const [isProductEdited, SetProductEdited] = useState(false);
  const [isAdmin, setAdmin] = useContext(AdminContext);

  useEffect(() => {
    const data = localStorage.getItem("isAdmin");
    if (data) {
      setAdmin(JSON.parse(data));
    }
  }, [isAdmin]);

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

  const AdminView = (
    <Card>
      <Img src={url} />
      <Title>Product:{title}</Title>
      <Price>Rate:{price}</Price>
      <EditButton onClick={openEditModal}>Edit</EditButton>
      <EditModal
        showModal={showEditProduct}
        setShowModal={setShowEditProduct}
        isProductEdited={isProductEdited}
        SetProductEdited={SetProductEdited}
        id={id}
      />
      <DeleteButton onClick={() => DeleteProduct(id)}>Delete</DeleteButton>
    </Card>
  );
  const UserView = (
    <Card>
      <Img src={url} />
      <Title>Product: {title}</Title>
      <Price>Rate: {price} CAD</Price>
      <EditButton></EditButton>
    </Card>
  );
  return <div>{isAdmin ? AdminView : UserView}</div>;
};

export default ProductCards;
