import React, { useState } from "react";
import styled from "styled-components";

const PictureBox = ({ url, description }) => {
  const [popup, setPopup] = useState(false);

  const handleClose = (e) => {
    e.stopPropagation();
    setPopup(false);
  };
  const handleOpen = (e) => {
    e.stopPropagation();
    setPopup(true);
  };

  return (
    <>
      <Hidden visible={popup} onClick={handleClose} />
      <PictureContainer popup={popup} onClick={handleOpen}>
        <BackgroundImage>
          <Picture src={url} alt={description} popup={popup} />
        </BackgroundImage>
        {popup ? (
          <Exit onClick={handleClose} visible={!popup}>
            Cerrar
          </Exit>
        ) : null}
        {description ? <Text>{description}</Text> : null}
      </PictureContainer>
    </>
  );
};

const BackgroundImage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: white;
`;

const Hidden = styled.div`
  position: fixed;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: black;
  z-index: 1;
  opacity: 0.5;
`;

const Exit = styled.button`
  position: absolute;
  cursor: pointer;
  outline: none;
  right: 10px;
  top: 10px;
  width: 55px;
  height: 20px;
  border-radius: 50px;
  font-size: 0.8em;
  color: black;
  border: none;
  background: white;
  @media (max-width: 600px) {
    width: 45px;
    height: 17px;
    font-size: 0.5em;
  }
`;

const Text = styled.p`
  text-align: center;
  color: black;
`;

const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  margin: 10px 0 10px 0;
  border-radius: 5px;
  background-color: whitesmoke;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 1s;
  ${(props) =>
    props.popup
      ? `
      cursor: default;
      position: fixed;
      top: 10px;
      left: 5px;
      right: 5px;
      overflow: auto;
      z-index:2;
      margin: 0;
      max-height: 90vh;
      align-items: center;
      width: auto;
  `
      : `
        :hover {
            transform: scale(1.02);
        }`}
`;

const Picture = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  ${(props) =>
    props.popup
      ? `
        height: 80vh;
        width: auto;
        @media (max-width: 600px) {
            width: 100%;
            height: auto;
        }
        `
      : ``}
`;

export default PictureBox;
