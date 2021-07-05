import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-left: 200px;
  margin-right: 200px;
  @media (max-width: 768px) {
    margin-left: 100px;
    margin-right: 100px;
  }
`;

export const Main = styled.main`
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;
