import React from 'react'
import styled from "styled-components";
const Darkbackground = styled.div`
  color: #fff;
  padding: 50px 100px;
  background: #101522;
`;
const A = styled.a`
font-size: medium;
color: white;
margin:5px;
`;


const Sources = () => {
    return (
        <Darkbackground>
            <h1>Sources</h1>
         <ul>
             <li ><A href="https://www.codavilla.com/posts/4">Refrences for styling</A></li>
             <li><A href="https://www.youtube.com/c/Codevolution">Code Evolution Youtube Channel for React Concepts</A></li>
             <li><A href="https://www.youtube.com/watch?v=eYVGoXPq2RA&t=2824s">CRUD usin mangoose,mongoDb,Express,Node</A></li>
             <li><A href="https://undraw.co/illustrations">Created Home Page Images using undraw</A></li>
             <li><A href="https://www.linkpicture.com/en/index.php">Used linkPicture to uplaod picture and use picture url</A></li>
         </ul>
            </Darkbackground>
    )
}

export default Sources
