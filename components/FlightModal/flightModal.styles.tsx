import ReactModal from "react-modal";
import styled from "styled-components";

export const ModalWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const SelectButton = styled.div`
  height: 4vh;
  width: 150px;
  border-radius: 6px;
  font-size: 20px;
  background: #02848e;
  cursor: pointer;
  color: white;
  text-align: center;
`;

export const CloseButton = styled.div`
  height: 4vh;
  width: 100px;
  border-radius: 6px;
  font-size: 20px;
  background: #fe5351;
  cursor: pointer;
  text-align: center;
`;

export const BookButton = styled.div`
  height: 4vh;
  width: 100px;
  border-radius: 6px;
  font-size: 20px;
  background: #03e10a;
  cursor: pointer;
  text-align: center;
`;

export const Modal = styled(ReactModal)`
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  position: fixed;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1vh;
  justify-content: center;
`;
