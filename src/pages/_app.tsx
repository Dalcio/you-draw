import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider
} from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { getCookie, setCookies } from "cookies-next";
import { GetServerSidePropsContext, NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode, useState } from "react";

import Head from "next/head";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type MyAppProps = AppProps & {
  Component: NextPageWithLayout;
  colorScheme: ColorScheme;
};

export default function MyApp({ Component, pageProps, ...props }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    props.colorScheme
  );

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    setCookies("mantine-color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30
    });
  };

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <NotificationsProvider>
            {getLayout(<Component {...pageProps} />)}
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

MyApp.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie("mantine-color-scheme", ctx) || "light"
});
