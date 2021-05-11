import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { Button } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Fade from "@material-ui/core/Fade";
import Carousel from "./Carousel/Carousel";
import axios from "axios";
import {
  img_500,
  unavailable,
  unavailableLandscape,
} from "../../config/config";
import {
  ModalContent,
  PortraitImage,
  LandscapeImage,
  Tagline,
  ModalBody,
  ModalTitle,
  ModalDescription,
  ModalActions,
} from "./ModalStyle";
import HorizontalDrawer from "../../pages/SharedStyles/HorizontalDrawer";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "80%",
    height: "80%",
    backgroundColor: "#54596b",
    border: "1px solid #282c34",
    borderRadius: 30,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));

export default function ModalContainer({ children, media_type, id }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  // const [video, setVideo] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setContent(data);
    //console.log(data);
  };

  // const fetchVideo = async () => {
  //   const { data } = await axios.get(
  //     `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  //   );

  //   setVideo(data.results[0]?.key);
  // };

  useEffect(() => {
    fetchData();
    //       fetchVideo();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {content && (
            <div className={classes.paper}>
              <ModalContent>
                <PortraitImage
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                />
                <LandscapeImage
                  src={
                    content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={content.name || content.title}
                />
                <ModalBody>
                  <ModalTitle>
                    <div>
                      {content.name || content.title} (
                      {(
                        content.first_air_date ||
                        content.release_date ||
                        "-----"
                      ).substring(0, 4)}
                      )
                    </div>
                    <div></div>
                  </ModalTitle>
                  {content.tagline && (
                    <Tagline>Tagline:{content.tagline}</Tagline>
                  )}

                  <ModalDescription>{content.overview}</ModalDescription>

                  <div>
                    <div style={{ display: "flex", fontWeight: "bold" }}>
                      {" "}
                      <HorizontalDrawer /> Casting
                    </div>
                    <Carousel id={id} media_type={media_type} />
                  </div>

                  <ModalActions>
                    {" "}
                    <Button
                      variant="contained"
                      startIcon={<YouTubeIcon />}
                      color="secondary"
                      target="__blank"
                     // href={`https://www.youtube.com/watch?v=${video}`}
                      style={{ margin: "5px" }}
                    >
                      Watch the Trailer
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<FavoriteIcon />}
                      color="primary"
                      style={{ margin: "5px" }}
                    >
                      Add to Favorite
                    </Button>
                  </ModalActions>
                </ModalBody>
              </ModalContent>
            </div>
          )}
        </Fade>
      </Modal>
    </>
  );
}
