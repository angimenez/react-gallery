import React from "react";
import styled from "styled-components";
import { useWindowsDimension } from "@angimenez/custom-hooks";

const SMALL = 600;
const MEDIUM = 1000;
const BIG = 1500;
const ColumnWrapper = ({ children }) => {
  const { width } = useWindowsDimension();
  const columCount = ["mobile"];
  if (width > SMALL) columCount.push("tablet");
  if (width > MEDIUM) columCount.push("pc");
  if (width > BIG) columCount.push("big");
  return (
    <>
      {columCount.map((_, column) => (
        <Column width={90 / columCount.length} key={column}>
          {React.Children.map(children, (child, i) =>
            i % columCount.length === column ? child : null
          )}
        </Column>
      ))}
    </>
  );
};

const Images = ({ images }) => {
  if (images && images.length)
    return (
      <Container>
        <ColumnWrapper>
          {images.map((item, i) => {
            return (
              <PictureContainer key={item.url + i}>
                <Picture src={item.url} alt={item.description} />
                {item.description ? <Text>{item.description}</Text> : null}
              </PictureContainer>
            );
          })}
        </ColumnWrapper>
      </Container>
    );
  return null;
};

const Text = styled.p`
  text-align: center;
  color: black;
`;

const Column = styled.div`
  margin: 10px;
  width: ${({ width = 100 }) => width}%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0 10px 0;
  border-radius: 5px;
  background-color: whitesmoke;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 1s;
  :hover {
    transform: scale(1.02);
  }
`;

const Picture = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export default Images;
