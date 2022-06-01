import { createStyles } from "@mantine/core";

const useCardStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    gap: theme.spacing.lg,
    border: `1px solid #fff`,
    "&:hover": {
      cursor: "pointer",
      opacity: 0.8,
      border: `1px solid ${theme.colors.gray[6]}`
    }
  },
  unstyleLink: {}
}));

export default useCardStyles;
