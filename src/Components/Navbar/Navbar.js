import React, { useState, useEffect , useContext } from "react";
import {
  Nav,
  NavbarContainer,
  Logo,
  Icon,
  MobileMenu,
  Menu,
  MenuButton,
  MenuLinks,
  MenuList,
} from "./Navbar.elements";
import { FaTimes, FaBars } from "react-icons/fa";
import { Button } from "../../GlobalStyles";
import KailashTradersLogo from "../../images/KailashTradersLogo.png";
import LoginForm from "./LoginForm";
import { AdminContext } from "../../ContextAPI/AdminProvider";
import { useHistory } from "react-router";

const Navbar = () => {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [isFullScreen, setFullScreen] = useState(true);
  const [isLoggedIn, SetLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isAdmin,setAdmin] = useContext(AdminContext);
  let history = useHistory()
  const openModal = () => {
    setShowLogin(true);
  };
  const LogOut = () => {
    localStorage.setItem("isAdmin", JSON.stringify(false));
    history.push("/");
  };

  const HandleMobileMenu = () => setMobileMenu(!isMobileMenu);

  const ShowButtonOnFullScreen = () => {
    if (window.innerWidth <= 960) {
      setFullScreen(false);
    } else {
      setFullScreen(true);
    }
  };
  useEffect(() => {
    ShowButtonOnFullScreen();
  }, []);
  window.addEventListener("resize", ShowButtonOnFullScreen);
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <Logo to="/">
            <Icon src={KailashTradersLogo} />
            KAILASH TRADERS
          </Logo>
          <MobileMenu onClick={HandleMobileMenu}>
            {" "}
            {/* appears only on mobile screen */}
            {isMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileMenu>
          <Menu onClick={HandleMobileMenu} click={isMobileMenu}>
            <MenuList>
              <MenuLinks to="/">Home</MenuLinks>
            </MenuList>
            <MenuList>
              <MenuLinks to="/Products">Products</MenuLinks>
            </MenuList>
            <MenuList>
              <MenuLinks to="/Documentation">Documentation</MenuLinks>
            </MenuList>
            <MenuList>
              <MenuLinks to="/Sources">Sources</MenuLinks>
            </MenuList>
            <MenuButton>
              {isFullScreen ? (
               isAdmin ? (
                  <Button primary onClick={() => LogOut()}>
                    LOG OUT
                  </Button>
                ) : (
                  <div>
                    <Button primary onClick={() => openModal()}>
                      LOG IN
                    </Button>
                    <LoginForm
                      showModal={showLogin}
                      setShowModal={setShowLogin}
                      SetLoggedIn={SetLoggedIn}
                    />
                  </div>
                )
              ) : (
                <div>
                  <Button fontBig primary>
                    Log In
                  </Button>
                  <LoginForm
                    showModal={showLogin}
                    setShowModal={setShowLogin}
                    isLoggedIn={isLoggedIn}
                    SetLoggedIn={SetLoggedIn}
                  />
                </div>
              )}
            </MenuButton>
          </Menu>
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
