import { useDarkMode } from "storybook-dark-mode";
import { MantineProvider, ColorSchemeProvider, Stack } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

export const parameters = { layout: "fullscreen" };

function ThemeWrapper(props: { children: React.ReactNode }) {
  return (
    <ColorSchemeProvider colorScheme="light" toggleColorScheme={() => {}}>
      <MantineProvider
        theme={{ colorScheme: useDarkMode() ? "dark" : "light" }}
        withGlobalStyles
        withNormalizeCSS
      >
        <NotificationsProvider>
          <Stack style={{ height: "100vh" }} align="center" justify="center">
            {props.children}
          </Stack>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export const decorators = [
  (renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>
];
