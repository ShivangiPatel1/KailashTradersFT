import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import pic from "../../images/Cement.jpg";
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 400px;
  height: 300px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #88bdbc;
  color: #fff;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #fff;
  padding: 10%;
  font-size: 1rem;
  label {
    float: left;
    width: 100px;
    clear: left;
    text-align: left;
  }
`;
const FormInput = styled.input`
  float: right;
  padding: 10px;
  background: #fff;
  color: #000;
  border: none;
  border-radius: 5px;
  margin: 2px;
  height: 25px;
`;
const SubmitButton = styled.input`
  border: none;
  outline: 0;
  padding: 12px;
  text-align: center;
  cursor: pointer;
  background: #4f4a41;
  width: 30%;
  margin-left: 110px;
  font-size: 18px;
  transition: background 200ms ease-in color 200ms ease-in;
  border-radius: 10px;
  &:hover {
    background: #6e6658;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const Modal = ({
  showModal,
  setShowModal,
  isProductAdded,
  SetProductAdded,
}) => {
  const modalRef = useRef();
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const addProduct = (e) => {
    e.preventDefault();

    fetch("https://kailashtraders.herokuapp.com/product", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        url: image,
        code: code,
        name: name,
        price: price,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console
      .then((json) => console.log(json));
    SetProductAdded(!isProductAdded);
  };

  const AddProductForm = (
    <form method="post" onSubmit={(e) => addProduct(e)}>
      <label>Image:</label>
      <FormInput
        required
        type="text"
        name="code"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <label>Product Code:</label>
      <FormInput
        required
        type="text"
        name="code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <br />

      <label>Product Name: </label>
      <FormInput
        required
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <label>Cost:</label>
      <FormInput
        required
        type="text"
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <br />
      <SubmitButton type="submit" value="Add" ref={modalRef} />
    </form>
  );

  const ProductAddedMessage = <h1> Product has been added </h1>;

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                {isProductAdded ? ProductAddedMessage : AddProductForm}
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
export default Modal;
