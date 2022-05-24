import { Button } from "@mantine/core";

type SubmitBtnProps = {
  label: string;
  onClick?: () => void;
};

export function SubmitBtn({ label, onClick }: SubmitBtnProps) {
  return (
    <Button size="md" variant="filled" type="submit" onClick={onClick}>
      {label}
    </Button>
  );
}
