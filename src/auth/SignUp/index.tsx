import { GoogleBtn, SubmitBtn } from "@components/Buttons";
import {
  Button,
  Input,
  PasswordInput,
  Stack,
  Text,
  TextInput
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { At, Lock } from "tabler-icons-react";

import Link from "next/link";

import { sigUpFormValidation } from "../validations";

export function SignUp() {
  const form = useForm(sigUpFormValidation);

  const onSubmit = form.onSubmit((values) => {
    console.log(values);
  });

  const onSiginUpWithGoogle = () => {};

  return (
    <Stack spacing="lg" style={{ width: "100%" }}>
      <GoogleBtn sign="up" onClick={onSiginUpWithGoogle} />
      <Text align="center" sx={({ colors }) => ({ color: colors.gray[6] })}>
        Or
      </Text>
      <form onSubmit={onSubmit}>
        <Stack spacing="lg" style={{ width: "100%" }}>
          <TextInput
            required
            placeholder="username"
            {...form.getInputProps("username")}
          />
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
          <PasswordInput
            required
            icon={<Lock />}
            placeholder="Repeat password"
            {...form.getInputProps("confirmPassword")}
          />
          <SubmitBtn fullWidth label="Sign up" />
          <Link href="signin">
            <Button fullWidth variant="subtle">
              I already have an account
            </Button>
          </Link>
        </Stack>
      </form>
    </Stack>
  );
}
