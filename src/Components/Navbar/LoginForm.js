import React, {
  useRef,
  useEffect,
  useCallback,
  useState,
  useContext,
} from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { AdminContext } from "../../ContextAPI/AdminProvider";
import {useHistory} from 'react-router-dom';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  left: 500px;
  top: 300px;
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
  padding: 10px 24px;
  background: #fff;
  color: #000;
  border: none;
  border-radius: 5px;
  margin: 2px;
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

const LoginForm = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setAdmin] = useContext(AdminContext);
  const [isValid, setValidCheck] = useState("true");
  let history=useHistory();

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

  const CheckUserIsAdmin = (e) => {
    e.preventDefault();

    fetch("https://kailashtraders.herokuapp.com/login", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        email: email,
        password: password,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console
      .then((json) => {
        const checkAdmin = json.isAdmin;
        setAdmin(checkAdmin);
        localStorage.setItem("isAdmin", JSON.stringify(checkAdmin));
        setValidCheck(checkAdmin);
      });
  };

  const LoginAsAdmin = (
    <form method="post" onSubmit={(e) => CheckUserIsAdmin(e)}>
      <label>Email Id:</label>
      <FormInput
        required
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <label>Password: </label>
      <FormInput
        type="password"
        name="name"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <br />
      <SubmitButton type="submit" value="Login" onClick={()=>history.push("/Products")}/>
      {isValid ? " " : <p>Incorrect email or password</p>}
    </form>
  );

  const LoginSuccessMessage = <h1> You are Sucessfully Logged In</h1>;

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                {isAdmin ? LoginSuccessMessage : LoginAsAdmin}
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
export default LoginForm;
