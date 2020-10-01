import React from "react";
import styled from "styled-components";

const PictureBox = ({ url, description }) => {
  const [popup, setPopup] = useState(false);

  const handleClick = () => {
    setPopup(!popup);
  };

  return (
    <PictureContainer popup={popup} onClick={handleClick}>
      <Picture src={url} alt={description} />
      {popup ? (
        <Exit onClick={handleClick} visible={!popup}>
          Cerrar
        </Exit>
      ) : null}
      {description ? <Text>{description}</Text> : null}
    </PictureContainer>
  );
};

const Exit = styled.button`
  cursor: pointer;
  outline: none;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 55px;
  height: 20px;
  border-radius: 50px;
  font-size: 0.8em;
  font-family: "Montserrat";
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
  width: 100%;
  margin: 10px 0 10px 0;
  border-radius: 5px;
  background-color: whitesmoke;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 1s;
  ${(props) =>
    props.popup
      ? `
      position: fixed;
      top: 10%;
      left: auto;
      overflow: auto;
      z-index:2;
      transform: scale (1);
  `
      : ""}
  :hover {
    transform: scale(1.02);
  }
`;

const Picture = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export default PictureBox;
