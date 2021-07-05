import React from "react";
import FlightModal from "../FlightModal/flightModal";
import {
  Wrapper,
  FlightInfo,
  MoreInfo,
  FlightLabel,
  FlightWrapper,
  InfoLabel,
} from "./flightBlock.styles";
import Image from "next/image";
import AirlineImg from "../../public/Air-France-logo.png";
import IconImg from "../../public/flight.png";

export default function FlightBlock(props: any) {
  return (
    <Wrapper>
      <Image src={AirlineImg} alt="airline" height={80} width={120}></Image>
      <FlightLabel>{props.airline}</FlightLabel>
      <FlightWrapper>
        <FlightInfo>
          <FlightLabel>{props.takeoff}</FlightLabel>
          <InfoLabel>{props.departureAirport}</InfoLabel>
        </FlightInfo>
        <FlightInfo>
          <Image src={IconImg} alt="airline" height={40} width={150}></Image>
          <InfoLabel>{props.duration} mins</InfoLabel>
        </FlightInfo>
        <FlightInfo>
          <FlightLabel>{props.landing}</FlightLabel>
          <InfoLabel>{props.arrivalAirport}</InfoLabel>
        </FlightInfo>
      </FlightWrapper>

      <MoreInfo>
        <FlightLabel>{props.price} €</FlightLabel>
        <FlightModal
          airline={props.airline}
          takeoff={props.takeoff}
          landing={props.landing}
          departureAirport={props.departureAirport}
          arrivalAirport={props.arrivalAirport}
          duration={props.duration}
          price={props.price}
        ></FlightModal>
      </MoreInfo>
    </Wrapper>
  );
}
