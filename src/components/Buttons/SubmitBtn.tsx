import { Button } from "@mantine/core";

type SubmitBtnProps = {
  label: string;
  onClick?: () => void;
  fullWidth?: boolean;
};

export function SubmitBtn({ label, fullWidth, onClick }: SubmitBtnProps) {
  return (
    <Button
      fullWidth={fullWidth}
      size="md"
      variant="filled"
      type="submit"
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
