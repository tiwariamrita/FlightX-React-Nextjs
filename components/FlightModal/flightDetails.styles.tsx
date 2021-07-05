import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 500px;
  position: relative;
  box-shadow: 5px 5px 5px 5px #888888;
  background-image: linear-gradient(to bottom right, #4ecdc4, #556290);
  margin-bottom: 10px;
  border-radius: 20px;
  z-index: 999;
  @media (max-width: 768px) {
    width: inherit;
  }
`;

export const ModalTitle = styled.label`
  color: #06007a;
  font-size: 25px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const LabelSection = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InfoLabel = styled.label`
  font-size: 25px;
  width: 200px;
  color: white;
  @media (max-width: 768px) {
    font-size: 22px;
    width: 180px;
  }
`;

export const Price = styled.label`
  color: #fcfc38;
  font-size: 25px;
  font-weight: bold;
  width: 200px;
  @media (max-width: 768px) {
    font-size: 22px;
    width: 180px;
  }
`;
