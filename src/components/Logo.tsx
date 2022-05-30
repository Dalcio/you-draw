import { useMantineTheme } from "@mantine/core";

export function Logo() {
  const { breakpoints } = useMantineTheme();

  return (
    <picture>
      <source
        media={`(max-width: ${breakpoints.sm}px) `}
        height="38px"
        srcSet="/logo.svg"
      />
      <img src="/logo-with-name.svg" alt="YouDraw logo" height="46px" />
    </picture>
  );
}
