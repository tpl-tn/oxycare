import * as React from "react";
import { Helmet } from "react-helmet-async";
import { NavBar } from "app/components/NavBar";
import { Masthead } from "./Masthead";
import { Features } from "./Features";
import { PageWrapper } from "app/components/PageWrapper";

export function GuidePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A platform to distribute oxygen concentrators in Tunisia."
        />
      </Helmet>
      <Masthead />
      <Features />
    </>
  );
}