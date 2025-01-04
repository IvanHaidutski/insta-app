import React from "react";
import {
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { User } from "lucide-react";
import Loader from "../loader";

type Props = {};

const ClerkAuthState = (props: Props) => {
  return (
    <>
      <ClerkLoading>
        <Loader state>
          <></>
        </Loader>
      </ClerkLoading>
    </>
  );
};

export default ClerkAuthState;
