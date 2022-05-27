import { Box, Button } from "@mantine/core";

import Link from "next/link";

export function AuthBtn() {
  return (
    <Box>
      <Link href="signin">
        <Button
          size="md"
          variant="subtle"
          styles={(theme) => ({
            root: {
              "&:hover": {
                backgroundColor: "transparent"
              }
            }
          })}
        >
          Sign in
        </Button>
      </Link>
      <Link href="sigup">
        <Button size="md" variant="outline">
          Sign up
        </Button>
      </Link>
    </Box>
  );
}
