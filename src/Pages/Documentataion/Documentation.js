import React from "react";
import styled from "styled-components";
const Darkbackground = styled.div`
  color: #fff;
  padding: 50px 100px;
  background: #101522;
`;
const Lightbackground = styled.div`
  color: #101522;
  padding: 50px 100px;
  background: #fff;
`;
const A = styled.a`
font-size: medium;
color: white;
`;
const Documentation = () => {
  return (
    <div>
      <Darkbackground>
        <h1>About the Website</h1>
        <br />
        <h3>Based on Option B</h3>
        <br />
        <h2>
          The Website is developed for family buisness. The buisness is about
          trading and selling building material. It is simple company website
          with Home page as a introduction to Comapny Values and Vision and
          Product Page for Product Catalogue.
        </h2><br/><br/>
        <h4>GitHub Links</h4>
        <br />
        <ul>
          <li>
            {" "}
            <A  href="https://github.com/ShivangiPatel1/KailashTradersBT">
              Link to BackEnd 
            </A>
          </li>
          <li>
            <A href="https://github.com/ShivangiPatel1/KailashTradersFT">
              Link to FrontEnd
            </A>
          </li>
        </ul>
      </Darkbackground>
      <Lightbackground>
        <h1>Features</h1>
        <br />
        <ul>
          <li>
            Use npm install for both frontend and backend to run the project
          </li>
          <li>The Site will be used by both user/visiter and admin.</li>
          <li>
            The Home page is same for both the user and admin. But Product Page
            would be different.
          </li>
          <li>
            User/Visitor is only allowed to check the product detials. Admin is
            given rights to Edit or delete the existing product and add new
            product.
          </li>
          <li>
            Adding,Removing and Editing features implemented and can be acessed
            only by Admin.
          </li>
          <li>
            Use REST API with Express to manage all the data for product details
            in backend and Used MongoDB to persist data.
          </li>
          <li>Used Local storage to persist Admin flag.</li>
          <li>Used Context Api for state management.</li>
          <li>
            App has many Components and Client side routing for four page including Documentataion and Sources.
          </li>
        </ul>
      </Lightbackground>
      <Darkbackground>
        <h1>Features other than checklist</h1>
        <br />
        <ul>
          <li>Used Styled Components Library for styling the Website</li>
          <li>Used React-Spring Library for modal animation</li>
          <li>Implemented Authenticated Admin LogIn and LogOut</li>
        </ul>
      </Darkbackground>
    </div>
  );
};

export default Documentation;
