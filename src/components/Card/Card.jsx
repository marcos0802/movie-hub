import HowToVoteIcon from "@material-ui/icons/HowToVote";
import { img_300, unavailable } from "../../config/config";
import { CardContainer, CardImage, CardTitle, CardFooter } from "./CardStyle";

const Card = ({ id, poster, title, date, media_type, vote_average }) => {
  return (
    <CardContainer>
      <CardImage
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <CardTitle>{title}</CardTitle>
      <CardFooter>
        <span>{media_type === "tv" ? "TV Series" : "Movie"}</span>
        <span>{date}</span>
        <span className="vote">
          <HowToVoteIcon style={{ fontSize: "13px" }} /> {vote_average}
        </span>
      </CardFooter>
    </CardContainer>
  );
};

export default Card;
