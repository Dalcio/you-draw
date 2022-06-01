import { createStyles, Tabs, TabsProps } from "@mantine/core";

export function StyledTabs(props: TabsProps) {
  return (
    <Tabs
      variant="unstyled"
      styles={(theme) => ({
        tabControl: {
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[0]
              : theme.colors.gray[9],
          border: `1px solid ${
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[4]
          }`,
          fontSize: theme.fontSizes.md,
          padding: `${theme.spacing.md}px ${theme.spacing.lg}px`,

          "&:not(:first-of-type)": {
            borderLeft: 0
          },

          "&:first-of-type": {
            borderTopLeftRadius: theme.radius.sm,
            borderBottomLeftRadius: theme.radius.sm
          },

          "&:last-of-type": {
            borderTopRightRadius: theme.radius.sm,
            borderBottomRightRadius: theme.radius.sm
          }
        },

        tabActive: {
          backgroundColor: theme.colors.blue[7],
          borderColor: theme.colors.blue[7],
          color: theme.white
        }
      })}
      {...props}
    />
  );
}

const useLibraryStyles = createStyles((theme) => ({
  boardGrid: {
    display: "grid",
    gap: `${theme.spacing.md}px`,
    [`@media (min-width: ${theme.breakpoints.xs}px)`]: {
      gridTemplateColumns: "1fr 1fr"
    },
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      gridTemplateColumns: "1fr 1fr 1fr"
    }
  }
}));

export default useLibraryStyles;
