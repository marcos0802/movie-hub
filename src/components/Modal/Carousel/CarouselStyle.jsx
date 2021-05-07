import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  .carousel-img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 5px;
    box-shadow: 0px 0px 5px black;
  }
  .carousel-actor {
    text-align: justify;
  }
`;
