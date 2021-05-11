import styled from "styled-components";

export const CardContainer = styled.div`
  .media {
    width: calc(20% - 20px);
    margin-bottom: 10px;
    margin-left: 20px;
    box-shadow: 0px 1px 3px black;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    padding: 10px;
  }

  .media:hover {
    background: #111;
    transform: scale(1.05);
  }
  .info-hidden {
    display: none;
    opacity: 0;
  }

  @media (max-width: 976px) {
    .media {
      width: calc(25% - 10px);
    }
  }

  @media (max-width: 747px) {
    .media {
      width: calc(33% - 10px);
    }
  }

  @media (max-width: 600px) {
    .media {
      width: calc(50% - 10px);
    }
  }

  @media (max-width: 390px) {
    .media {
      width: calc(80% - 10px);
    }
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

export const CardTitle = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 1em;
  color: #fff;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 20px;
  & {
    font-size: 0.85em;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 10px;
  font-size: 13px;
  color: white;
  .vote {
    background-color: #2e6174;
    border-radius: 6px;
    padding-right: 2px;
    padding-left: 2px;
  }
`;
