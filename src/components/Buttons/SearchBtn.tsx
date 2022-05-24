import { Button } from "@mantine/core";
import { Search } from "tabler-icons-react";

type SearchBtnProps = {
  onClick?: () => void;
};

export function SearchBtn({ onClick }: SearchBtnProps) {
  return (
    <Button
      size="md"
      variant="subtle"
      leftIcon={<Search />}
      color="gray"
      onClick={onClick}
    ></Button>
  );
}
