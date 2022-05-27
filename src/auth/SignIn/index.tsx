import { GoogleBtn, SubmitBtn } from "@components/Buttons";
import { Button, Input, PasswordInput, Stack, Text } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import Link from "next/link";
import { At, Lock } from "tabler-icons-react";

export function SignIn() {
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

  const onSiginInWithGoogle = () => {};

  return (
    <Stack spacing="lg" style={{ width: "100%" }}>
      <GoogleBtn onClick={onSiginInWithGoogle} />
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
