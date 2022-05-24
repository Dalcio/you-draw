import { Button } from "@mantine/core";
import { BrandGoogle } from "tabler-icons-react";

export function SignUpWithGoogleBtn() {
  return (
    <Button size="md" variant="white" leftIcon={<BrandGoogle />}>
      Sign up with Google
    </Button>
  );
}
