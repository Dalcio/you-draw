import { Box } from "@mantine/core";

export function HomeIntro() {
  return (
    <Box
      p="lg"
      style={{ minHeight: "100vh" }}
      sx={({ spacing, colors }) => ({
        paddingTop: `calc(${spacing.lg}px + 2 * 65px)!important`,
        background: colors.gray[2]
      })}
    >
      Home Intro
    </Box>
  );
}
