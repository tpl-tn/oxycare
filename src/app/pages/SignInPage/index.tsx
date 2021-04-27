import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase, { auth } from "../../../utils/firebase";
import { useAuthSlice } from "slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function SignInPage() {
  const dispatch = useDispatch();
  const {
    actions: { loggedIn },
  } = useAuthSlice();
  const isLoggedIn = useSelector((state: any) => state);
  console.log({ isLoggedIn });
  const history = useHistory();

  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  };
  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log({ user: user.providerData });
        dispatch(loggedIn(user.providerData));
        history.push("/");
      }
    });
    return () => unregisterAuthObserver();
  }, []);
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta
          name="description"
          content="A platform to distribute oxygen concentrators in Tunisia."
        />
      </Helmet>
      <Container>
        <StyledFirebaseAuth uiConfig={uiConfig as any} firebaseAuth={auth} />
      </Container>
    </>
  );
}
