import styled from "styled-components";
import Link from "next/link";

export const NavBarContainer = styled.div`
  height: inherit;
  width: 80vw;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  padding: 2rem 2rem 0rem 2rem;
`;

export const Name = styled.span`
  color: #2c3e50;
  font-size: x-large;
  font-family: "Franklin Gothic Medium";
`;

export const LanguageLink = styled(Link)`
  font-size: 22px;
  color: #1d8cfa;
`;
