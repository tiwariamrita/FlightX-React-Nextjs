import React from "react";
import { useRouter } from "next/router";
import { NavBarContainer, Name, LanguageLink } from "./topbar.styles";

/**
 * Represents the navigation bar displaying name and language option link
 * @param props
 * @returns
 */

export default function TopBar(props: any) {
  const router = useRouter();
  return (
    <NavBarContainer>
      <Name>FlightX</Name>
      <LanguageLink href="/" locale={router.locale === "en" ? "fr" : "en"}>
        {router.locale === "en" ? "Switch to French" : "Passer en anglais"}
      </LanguageLink>
    </NavBarContainer>
  );
}
