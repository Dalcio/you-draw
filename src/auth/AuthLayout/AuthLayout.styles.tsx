import { createStyles } from "@mantine/core";

const useAuthLayoutStyles = createStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    maxWidth: "844px",
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      gridTemplateColumns: "1fr"
    }
  },
  leftAside: {
    backgroundColor: theme.black,
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      display: "none"
    }
  },
  form: {}
}));

export default useAuthLayoutStyles;
