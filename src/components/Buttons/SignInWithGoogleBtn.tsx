import { Button } from "@mantine/core";
import { BrandGoogle } from "tabler-icons-react";

export function SignInWithGoogleBtn() {
  return (
    <Button size="md" variant="white" color="" leftIcon={<BrandGoogle />}>
      Sign in with Google
    </Button>
  );
}
