import React from "react";
import {
  Container,
  InfoLabel,
  Price,
  LabelSection,
  ModalTitle,
} from "./flightDetails.styles";
import { useTranslation } from "next-i18next";

/**
 * Represents the contents of the flight modal
 * @param props
 * @returns
 */

export default function FlightDetails(props: any) {
  const { t } = useTranslation("common");
  return (
    <Container>
      <ModalTitle>{props.airline}</ModalTitle>
      <LabelSection>
        <InfoLabel>Flight Num</InfoLabel>
        <InfoLabel>{props.flightNumber}</InfoLabel>
      </LabelSection>
      <LabelSection>
        <InfoLabel>{t("from")}</InfoLabel>
        <InfoLabel>{props.departureAirport}</InfoLabel>
      </LabelSection>
      <LabelSection>
        <InfoLabel>{t("to")}</InfoLabel>
        <InfoLabel>{props.arrivalAirport}</InfoLabel>
      </LabelSection>
      <LabelSection>
        <InfoLabel>{t("dep-time")}</InfoLabel>
        <InfoLabel>{props.takeoff}h</InfoLabel>
      </LabelSection>
      <LabelSection>
        <InfoLabel>{t("arr-time")}</InfoLabel>
        <InfoLabel>{props.landing}h</InfoLabel>
      </LabelSection>
      <LabelSection>
        <InfoLabel>{t("duration")}</InfoLabel>
        <InfoLabel>{props.duration}</InfoLabel>
      </LabelSection>
      <LabelSection>
        <InfoLabel>{t("price")}</InfoLabel>
        <Price>{props.price}€</Price>
      </LabelSection>
    </Container>
  );
}
