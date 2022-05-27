import { AuthBtn, LibraryBtn } from "@components/Buttons";
import { createStyles, Stack, useMantineTheme } from "@mantine/core";

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

export function HomeHeader() {
  const { classes } = useHomeStyles();
  const { breakpoints } = useMantineTheme();
  const isSigned = true;

  return (
    <Stack
      p="lg"
      pb="sm"
      pt="sm"
      align="center"
      justify="space-between"
      className={classes.container}
    >
      <picture>
        <source
          media={`(max-width: ${breakpoints.md}px) `}
          srcSet="/logo.svg"
        />
        <img src="/logo-with-name.svg" alt="YouDraw logo" height="46px" />
      </picture>
      {(isSigned && <LibraryBtn />) || <AuthBtn />}
    </Stack>
  );
}
