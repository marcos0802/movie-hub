import React from "react";
import HowToVoteIcon from "@material-ui/icons/HowToVote";
import { img_300, unavailable } from "../../config/config";
import ModalContainer from "../Modal/Modal";
import { CardTitle, CardFooter,CardContainer } from "./CardStyle";
import "./Style.css";

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
