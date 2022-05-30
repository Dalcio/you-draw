import { createStyles, Stack } from "@mantine/core";

const useHomeStyles = createStyles((theme) => ({
  container: {
    flexDirection: "row",
    position: "fixed",
    zIndex: 10,
    width: "100%",
    top: 0,
    background: "white"
  }
}));

export function Header({ children }: any) {
  const { classes } = useHomeStyles();

  return (
    <Stack
      p="md"
      pb="xs"
      pt="xs"
      align="center"
      justify="space-between"
      className={classes.container}
    >
      {children}
    </Stack>
  );
}
