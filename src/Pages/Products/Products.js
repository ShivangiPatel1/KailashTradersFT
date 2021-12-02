import React, { useState, useEffect ,useContext} from "react";

import AllProducts from "./ProductCardFeatures";
import { AddProductButton } from "../../Components/ProductCards/ProductCards.elements";
import Modal from "../../Components/ProductCards/AddProductForm";
import AdminProvider from "../../ContextAPI/AdminProvider";
import { AdminContext } from "../../ContextAPI/AdminProvider";

const Products = () => {
  const [appState, setAppState] = useState({
    loading: false,
    products: null,
  });
  const [isProductAdded, SetProductAdded] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [isAdmin,setAdmin]=useContext(AdminContext);
  useEffect(()=>{
    const data =localStorage.getItem('isAdmin');
    if(data){
      setAdmin(JSON.parse(data))
    }
  },[])
  const openModal = () => {
    setShowAddProduct((prev) => !prev);
    SetProductAdded(false);
  };
  useEffect(() => {
    setAppState({ loading: true });
    const URL = "https://kailashtraders.herokuapp.com/product";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAppState({ loading: false, products: data });
      });
  }, [setAppState]);

  return (
    <>
    <AdminProvider>
      <div>
        {isAdmin?<AddProductButton onClick={openModal}>Add Product</AddProductButton>:<></>}
        <Modal
          showModal={showAddProduct}
          setShowModal={setShowAddProduct}
          isProductAdded={isProductAdded}
          SetProductAdded={SetProductAdded}
        />
      </div>
      <AllProducts isLoading={appState.loading} products={appState.products} />
      </AdminProvider>
    </>
  );
};

export default Products;
