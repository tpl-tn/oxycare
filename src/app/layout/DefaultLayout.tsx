import React, { FC, useEffect } from "react";
import { NavBar } from "app/components/NavBar";
import { PageWrapper } from "app/components/PageWrapper";
import { useHistory } from "react-router-dom";

const DefaultLayout: FC = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn !== "true") history.push("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavBar />
      <PageWrapper>{children}</PageWrapper>
    </>
  );
};

export default DefaultLayout;
