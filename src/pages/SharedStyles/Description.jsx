import styled from "styled-components";

export const HomeContainer = styled.div`
  margin-top: 6vh;
  height: 70vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 1px 5px black;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  @media (max-width: 834px) {
    overflow-x: hidden;
    justify-content: center;
  }
`;

export const TrendingContainer = styled.div`
  height: 66vh;
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MoviesContainer = styled.div`
  height: 58vh;
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 900px) {
    & {
      height: 57vh;
    }
  }

  @media (max-width: 717px) {
    & {
      height: 55vh;
    }
  }

  @media (max-width: 480px) {
    & {
      height: 47vh;
    }
  }
`;

export const SeriesContainer = styled.div`
  height: 60vh;
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 900px) {
    & {
      height: 57vh;
    }
  }

  @media (max-width: 717px) {
    & {
      height: 55vh;
    }
  }

  @media (max-width: 480px) {
    & {
      height: 47vh;
    }
  }
`;

export const SearchBox = styled.div`
  display: flex;
  margin: 10px 0;
`;

export const SearchContainer = styled.div`
  height: 55vh;
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 480px) {
    & {
      height: 47vh;
    }
  }
`;

export const MoreContainer = styled.div`
  margin-top: 10px;
  height: 79vh;
  overflow-x: hidden;
`;
