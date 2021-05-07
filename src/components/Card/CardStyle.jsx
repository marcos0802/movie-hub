import styled from "styled-components";

export const CardImage = styled.img`
  width: 100%;
  height: 180px;
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
