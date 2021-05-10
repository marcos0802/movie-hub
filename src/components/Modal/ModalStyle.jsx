import styled from "styled-components";

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 835px) {
    & {
      flex-direction: row;
      justify-content: space-around;
      padding: 10px 0;
    }
  }
`;

export const PortraitImage = styled.img`
  display: none;
  object-fit: cover;
  border-radius: 10px;
  @media (min-width: 835px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    margin-top: 65px;
    object-fit: cover;
  }
`;

export const LandscapeImage = styled.img`
  object-fit: contain;
  border-radius: 10px;
  @media (min-width: 835px) {
    display: none;
  }
`;

export const Tagline = styled.p`
  padding-bottom: 7px;
  font-size: 0.8em;
  text-align: start;
  font-weight: bold;
  font-style: italic;
`;

export const ModalBody = styled.div`
  padding: 10px;
  width: 95%;
  height: 90%;
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  justify-content: space-evenly;
  @media (min-width: 835px) {
    width: 58%;
    padding: 0;
    height: 100%;
  }
`;

export const ModalTitle = styled.div`
  font-size: 3vw;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 835px) {
    font-size: 1.5vw;
  }
`;

export const ModalDescription = styled.div`
  display: flex;
  height: 40%;
  overflow-y: scroll;
  padding: 15px;
  border-radius: 20px;
  scrollbar-width: thin; /* Firefox */
  box-shadow: inset 0 0 5px #000000;
  text-align: justify;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 835px) {
    font-size: 16px;
    font-weight: 400;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 835px) {
    flex-direction: row;
  }
`;
