import React from "react";
import {
  Container,
  InfoLabel,
  Price,
  LabelSection,
  ModalTitle,
} from "./flightDetails.styles";
import { useTranslation } from "next-i18next";

export default function FlightDetails(props: any) {
  const { t } = useTranslation("common");
  return (
    <Container>
      <ModalTitle>{props.airline}</ModalTitle>
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
        <InfoLabel>{props.takeoff}</InfoLabel>
      </LabelSection>
      <LabelSection>
        <InfoLabel>{t("arr-time")}</InfoLabel>
        <InfoLabel>{props.landing}</InfoLabel>
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
