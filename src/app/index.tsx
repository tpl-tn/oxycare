/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from "react";
import { Helmet } from "react-helmet-async";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "../styles/global-styles";

import { HomePage } from "./pages/HomePage/Loadable";
import { NotFoundPage } from "./pages/NotFoundPage/Loadable";
import { useTranslation } from "react-i18next";
import SignInPage from "./pages/SignInPage";
import DefaultLayout from "./layout/DefaultLayout";

// TODO: Generate routes in external file routes.ts

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Oxycare"
        defaultTitle="Oxycare"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta
          name="description"
          content="A platform to share the oxygen concentrators in Tunisia."
        />
      </Helmet>

      <Switch>
        <Route
          exact
          path={process.env.PUBLIC_URL + "/"}
          component={() => (
            <DefaultLayout>
              <HomePage />
            </DefaultLayout>
          )}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/login"}
          component={SignInPage}
        />

        <Route
          component={() => (
            <DefaultLayout>
              <NotFoundPage />
            </DefaultLayout>
          )}
        />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
