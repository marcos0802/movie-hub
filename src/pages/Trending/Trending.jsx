import axios from "axios";
import React,{ useState, useEffect } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Card from "../../components/Card/Card";
import PageTitle from "../SharedStyles/PageTitle";
import HorizontalDrawer from "../SharedStyles/HorizontalDrawer";
import { TrendingContainer } from "../SharedStyles/Description";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);
  return (
    <>
      <PageTitle>
        <HorizontalDrawer />
        Trending Today
        <HorizontalDrawer />
      </PageTitle>
      <TrendingContainer>
        {content.length > 0
          ? content.map((cont) => (
              <Card
                key={cont.id}
                id={cont.id}
                poster={cont.poster_path}
                title={cont.title || cont.name}
                date={cont.first_air_date || cont.release_date}
                media_type={cont.media_type}
                vote_average={cont.vote_average}
              />
            ))
          : "No trending for the moment"}
      </TrendingContainer>
      <CustomPagination setPage={setPage} />
    </>
  );
};

export default Trending;
