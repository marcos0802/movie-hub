import React from "react";
import HowToVoteIcon from "@material-ui/icons/HowToVote";
import { img_300, unavailable } from "../../config/config";
import ModalContainer from "../Modal/Modal";
import { CardTitle, CardFooter } from "./CardStyle";
import "./Style.css";
import styled from "styled-components";

const CardContainer = styled.div`
  height: 290px;
  box-shadow: 0px 1px 5px black;
  border-radius: 6px;
  border: 2px solid steelblue;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  &:hover {
    transform: scale(1.05);
    .info-hidden {
      transition: all 2s ease;
      display: block;
      text-align: center;
      opacity: 1;
      background: #000;
    }
  }
  .info-hidden {
    display: none;
    opacity: 0;
    z-index: 999;
  }
`;

const Card = ({ id, poster, title, date, media_type, vote_average }) => {
  return (
    <ModalContainer media_type={media_type} id={id}>
      <div style={{ padding: "10px" }}>
        <CardContainer
          style={{
            background: `url(${
              poster ? `${img_300}${poster}` : unavailable
            }) no-repeat`,
            backgroundSize: "cover",
          }}
        >
          {/* <CardImage
          src={poster ? `${img_300}${poster}` : unavailable}
          alt={title}
        /> */}
          <div className="info-hidden">
            <CardTitle>{title}</CardTitle>
            <CardFooter>
              <span>{media_type === "tv" ? "TV Series" : "Movie"}</span>
              <span>{date}</span>
              <span className="vote">
                <HowToVoteIcon style={{ fontSize: "13px" }} /> {vote_average}
              </span>
            </CardFooter>
          </div>
        </CardContainer>
      </div>
    </ModalContainer>
  );
};

export default Card;
