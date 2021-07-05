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
import AirFranceImg from "../../public/Air-France-logo.png";
import LufthansaImg from "../../public/Lufthansa-Logo.png";
import IconImg from "../../public/flight.png";

/**
 * Represents flight block components generated onclick of search flights on search bar
 * with corresponding flight results.
 * @param props
 * @returns
 */

export default function FlightBlock(props: any) {
  return (
    <Wrapper>
      <Image
        src={props.airline === "Air France" ? AirFranceImg : LufthansaImg}
        alt="airline"
        height={80}
        width={120}
      ></Image>
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
          flightNumber={props.flightNumber}
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
