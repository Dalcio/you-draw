import { AuthLayout } from "@auth/AuthLayout";
import { SignUp } from "@auth/SignUp";
import { ReactElement } from "react";

export default function SignUpPage() {
  return <SignUp />;
}

SignUpPage.getLayout = (page: ReactElement) => (
  <AuthLayout sign="Up">{page}</AuthLayout>
);
