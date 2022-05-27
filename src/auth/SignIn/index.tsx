import { GoogleBtn, SubmitBtn } from "@components/Buttons";
import { Button, PasswordInput, Stack, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { At, Lock } from "tabler-icons-react";

import Link from "next/link";

import { sigInFormValidation } from "../validations";

export function SignIn() {
  const form = useForm(sigInFormValidation);

  const onSubmit = form.onSubmit((values) => {
    console.log(values);
  });

  const onSiginInWithGoogle = () => {};

  return (
    <Stack spacing="lg" style={{ width: "100%" }}>
      <GoogleBtn onClick={onSiginInWithGoogle} />
      <Text align="center" sx={({ colors }) => ({ color: colors.gray[6] })}>
        Or
      </Text>
      <form onSubmit={onSubmit}>
        <Stack spacing="lg" style={{ width: "100%" }}>
          <TextInput
            required
            icon={<At />}
            placeholder="Your email"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            required
            icon={<Lock />}
            placeholder="Your password"
            {...form.getInputProps("password")}
          />
          <SubmitBtn fullWidth label="Sign in" />
          <Link href="signup">
            <Button fullWidth variant="subtle">
              Create an account
            </Button>
          </Link>
        </Stack>
      </form>
    </Stack>
  );
}
