import React from "react";
import { Link } from "react-router-dom";
import { HomeContainer } from "../SharedStyles/Description";
import HomeImage from "../../assets/device-pile.png";
import styled from "styled-components";

const HomeLeftSide = styled.div`
  margin-top: 30vh;
  height: 30vh;
  width: calc(45% - 10px);
  color: white;
  h1 {
    font-size: 40px;
  }
  h3 {
    color: steelblue;
    font-weight: 400;
  }
  .btn {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px;
    position: relative;
    background: steelblue;
    font-size: 17px !important;
    color: white;
    border: none;
    border-radius: 6px;
    transition: all 0.3s ease;
    &:hover {
      background: #2a4e6d;
    }
  }
  @media (max-width: 1000px) {
    margin-top: 20vh;
    width: calc(50% - 10px);
    text-align: center;
  }
  @media (max-width: 834px) {
    margin-top: 10vh;
    width: 100%;
    .btn {
      margin-bottom: 20px;
    }
  }
`;

const HomeRightSide = styled.div`
  height: 40vh;
  width: calc(50% - 10px);
  img {
    width: 500px;
    object-fit: contain;
  }

  @media (max-width: 1000px) {
    margin-top: 5vh;
    img {
      width: 400px;
    }
  }
  @media (max-width: 834px) {
    margin-top: 2vh;
    width: 100%;
    text-align: center;
    img {
      width: 300px;
    }
  }
  @media (max-width: 400px) {
    margin-top: 5vh;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HomeLeftSide>
        <h1>Welcome to Movie Hub</h1>
        <h3>Join a large community and discuss about Movies and TV Series!</h3>
        <br/>
        <Link to="/more" className="btn">
          Join Now
        </Link>
      </HomeLeftSide>
      <HomeRightSide>
        <img src={HomeImage} alt="Device-Pile" className="image" />
      </HomeRightSide>
    </HomeContainer>
  );
};

export default Home;
