import { AuthLayout } from "@auth/AuthLayout";
import { SignIn } from "@auth/SignIn";
import { ReactElement } from "react";

export default function SignInPage() {
  return <SignIn />;
}

SignInPage.getLayout = (page: ReactElement) => (
  <AuthLayout sign="In">{page}</AuthLayout>
);
