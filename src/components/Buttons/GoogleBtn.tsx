import { Button } from "@mantine/core";
import { BrandGoogle } from "tabler-icons-react";

type GoogleBtnProps = {
  onClick?: () => void;
  sign?: "in" | "up";
};

export function GoogleBtn({ onClick, sign = "in" }: GoogleBtnProps) {
  return (
    <Button size="md" color="" leftIcon={<BrandGoogle />} onClick={onClick}>
      Sign {sign} with Google
    </Button>
  );
}
