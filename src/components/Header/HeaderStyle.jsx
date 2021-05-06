import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  cursor: pointer;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background: none;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 2.5em;
  padding: 10px 3vw;
  box-shadow: 0px 1px 5px black;
  color: #fff;
  z-index: 100;
  @media (max-width: 1000px) {
    & {
      font-size: 2em;
    }
  }

  @media (max-width: 450px) {
    & {
      font-size: 1.5em;
    }
  }
  .logo {
    color: steelblue;
  }
  .btn {
    padding: 10px;
    background: steelblue;
    font-size: 17px !important;
    color: white;
    border-radius: 6px;
    transition: all 0.3s ease;
    &:hover {
      background: #2a4e6d;
    }
  }
`;
