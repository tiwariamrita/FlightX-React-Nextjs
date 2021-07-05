import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavBarContainer, Name } from "./topbar.styles";

export default function TopBar(props: any) {
  const router = useRouter();
  return (
    <NavBarContainer>
      <Name>FlightX</Name>
      <Link href="/" locale={router.locale === "en" ? "fr" : "en"}>
        {router.locale === "en" ? "Switch to French" : "Passer en anglais"}
      </Link>
    </NavBarContainer>
  );
}
