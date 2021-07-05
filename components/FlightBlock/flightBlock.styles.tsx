import styled from "styled-components";

export const Wrapper = styled.div`
  height: 200px;
  width: 60%;
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  gap: 2vh;
  justify-content: center;
  align-items: center;
  border: 2px solid #dde0e1;
  border-radius: 15px;
  @media (max-width: 768px) {
    flex-direction: column;
    height: inherit;
    width: 100%;
  }
`;

export const AirlineDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlightInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  justify-content: center;
  align-items: center;
`;

export const MoreInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlightLabel = styled.label`
  font-size: 25px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const InfoLabel = styled.label`
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const FlightWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
