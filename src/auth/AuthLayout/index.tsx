import { Box, Card, Stack, Text } from "@mantine/core";
import { ReactChild } from "react";
import { Check } from "tabler-icons-react";

import useAuthLayoutStyles from "./AuthLayout.styles";

type AuthLayoutProps = {
  children: ReactChild;
  sign: "In" | "Up";
};

type AsideLeftSessionProps = {
  title: string;
  desc: string;
};

const AsideLeftSession = ({ title, desc }: AsideLeftSessionProps) => (
  <Box>
    <Text size="lg" sx={(theme) => ({ color: theme.colors.gray[6] })}>
      <Check color="rgb(9, 113, 241)" size={16} /> {title}
    </Text>
    <Text sx={(theme) => ({ color: theme.colors.gray[6] })}>{desc}</Text>
  </Box>
);

export function AuthLayout({ sign = "In", children }: AuthLayoutProps) {
  const { classes } = useAuthLayoutStyles();

  return (
    <Stack style={{ minHeight: "100vh" }} align="center" justify="center">
      <Card p={0} withBorder shadow="sm" className={classes.container}>
        <Stack p="xl" spacing="xl" className={classes.leftAside}>
          <Text mb="xs" size="xl" weight="bold" color="white">
            Jotting down never was to easy
          </Text>
          <AsideLeftSession
            title="Free to draw"
            desc="Draw under any youtube video"
          />
          <AsideLeftSession
            title="Ease Notes"
            desc="A new way of making notes"
          />
          <AsideLeftSession
            title="Free to draw"
            desc="Draw under any youtube video"
          />
        </Stack>
        <Stack p="xl" spacing="xl" align="center">
          <Box mb="xs">
            <Text size="xl" align="center" weight="bold">
              Sigg {sign} to YouDraw
            </Text>
            <Text
              align="center"
              size="sm"
              sx={(theme) => ({ color: theme.colors.gray[6] })}
            >
              {sign === "Up"
                ? "Get a free account, no credit card required"
                : "Welcome back, we're happy to see you again"}
            </Text>
          </Box>
          <>{children}</>
        </Stack>
      </Card>
    </Stack>
  );
}
