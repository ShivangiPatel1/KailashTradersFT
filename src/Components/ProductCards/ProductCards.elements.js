import styled from "styled-components";
import { Button } from "../../GlobalStyles";

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1300;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-right: 50px;
  padding-left: 50px;
  align-items: center;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin-right: 50px;
  margin-left: 50px;
  text-align: center;
  font-family: arial;
  transition: transform 200ms ease-in;
  width: 100%;
  max-width: 250px;
  &:hover {
    transform: scale(1.02);
  }
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Title = styled.h2`
  padding: 1rem;
`;

export const EditButton = styled(Button)`
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  margin-bottom: 5px;
  transition: background 200ms ease-in color 200ms ease-in;
  &:hover {
    background: #4f4a41;
  }
`;
export const DeleteButton = styled(Button)`
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #800000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  transition: background 200ms ease-in color 200ms ease-in;
  &:hover {
    background: #4f4a41;
  }
`;
export const AddProductButton = styled(Button)`
  
  margin:20px 20px 20px 100px;
  &:hover {
    background: #4f4a41;
  }
`;
export const Price = styled.p`
  color: grey;
  font-size: 18px;
`;
