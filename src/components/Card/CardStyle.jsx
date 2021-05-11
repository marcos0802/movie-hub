import styled from "styled-components";

export const CardContainer = styled.div`
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
      padding-top: 20px;
      display: block;
      opacity: 1;
      background: linear-gradient(to bottom, steelblue, darkblue);
    }
  }
  .info-hidden {
    display: none;
    opacity: 0;
    margin-top: 90%;
  }
`;

export const CardTitle = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 1.2em;
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
  padding-bottom: 20px;
  font-size: 12px;
  font-weight: 500;
  color: white;
  .vote {
    background-color: crimson;
    border-radius: 6px;
    padding-right: 2px;
    padding-left: 2px;
  }
`;
