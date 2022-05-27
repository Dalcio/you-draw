import { GoogleBtn, SubmitBtn } from "@components/Buttons";
import { Button, Input, PasswordInput, Stack, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { At, Lock } from "tabler-icons-react";

import Link from "next/link";

export function SignUp() {
  const form = useForm({
    initialValues: {
      email: "",
      password: ""
    },

    validationRules: {
      // email: "/^S+@S+$/"
    },
    errorMessages: {
      email: "Y",
      password: ""
    }
  });

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
          <Input
            icon={<At />}
            placeholder="Your email"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            icon={<Lock />}
            placeholder="Your password"
            {...form.getInputProps("password")}
          />
          <SubmitBtn fullWidth label="Sign in" />
          <Link href="signin">
            <Button fullWidth variant="subtle">
              I have an account
            </Button>
          </Link>
        </Stack>
      </form>
    </Stack>
  );
}
