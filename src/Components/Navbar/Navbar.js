import React, { useState, useEffect } from "react";
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

const Navbar = () => {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [isFullScreen, setFullScreen] = useState(true);
  const [isLoggedIn, SetLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const openModal = () => {
    setShowLogin(true);
    //SetLoggedIn(false);
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
            <MenuButton>
              {isFullScreen ? (
            
                <div>
                  <Button primary onClick={() => openModal()}>SIGN UP</Button>
                  <LoginForm
                    showModal={showLogin}
                    setShowModal={setShowLogin}
                    isLoggedIn={isLoggedIn}
                    SetLoggedIn={SetLoggedIn}
                  />
                </div>
              ) : (
                <Button fontBig primary>
                  Sign UP
                </Button>
              )}
            </MenuButton>
          </Menu>
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
