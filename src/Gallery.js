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
            return <PictureBox key={item.url + i} {...item} />;
          })}
        </ColumnWrapper>
      </Container>
    );
  return null;
};

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

export default Images;
