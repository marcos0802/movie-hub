import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import MoreIcon from "@material-ui/icons/More";
import { Home } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    background: "none",
    color: "white",
    boxShadow: "0px 1px 5px black",
    zIndex: 100,
  },
  menuItem: {
    color: "white",
    fontWeight: "700",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const history = useHistory();

  useEffect(() => {
    if (value === 0) {
      history.push("/");
    } else if (value === 1) {
      history.push("/trending");
    } else if (value === 2) {
      history.push("/movies");
    } else if (value === 3) {
      history.push("/series");
    } else if (value === 4) {
      history.push("/search");
    } else if (value === 5) {
      history.push("/more");
    }
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        className={classes.menuItem}
        label="Home"
        icon={<Home style={{ fontSize: 30 }} />}
      />
      <BottomNavigationAction
        className={classes.menuItem}
        label="Trending"
        icon={<WhatshotIcon style={{ fontSize: 30 }} />}
      />
      <BottomNavigationAction
        className={classes.menuItem}
        label="Movies"
        icon={<MovieIcon style={{ fontSize: 30 }} />}
      />
      <BottomNavigationAction
        className={classes.menuItem}
        label="TV Series"
        icon={<TvIcon style={{ fontSize: 30 }} />}
      />
      <BottomNavigationAction
        className={classes.menuItem}
        label="Search"
        icon={<SearchIcon style={{ fontSize: 30 }} />}
      />
      <BottomNavigationAction
        className={classes.menuItem}
        icon={<MoreIcon style={{ fontSize: 30 }} />}
      />
    </BottomNavigation>
  );
}
