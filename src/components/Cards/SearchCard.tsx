import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  useMantineTheme,
  Stack,
  Box,
  Skeleton,
  MantineShadow
} from "@mantine/core";
import Link from "next/link";

export type SearchCardProps = {
  thumbnail?: string;
  title?: string;
  channelName?: string;
  channelAvatar?: string;
  videUrl?: string;
  desc?: string;
  shadow?: MantineShadow | undefined;
  duration?: string;
};

function SearchCardLoading({ shadow }: { shadow?: MantineShadow | undefined }) {
  const theme = useMantineTheme();

  return (
    <Card
      shadow={shadow}
      p={0}
      sx={(theme) => ({
        width: "100%",
        maxWidth: 380,
        "&:hover": {
          cursor: "pointer",
          opacity: 0.8
        }
      })}
    >
      <Card.Section style={{ position: "relative" }}>
        <Skeleton height={160} width="100%" animate />
        <Badge
          variant="filled"
          radius="md"
          style={{ position: "absolute" }}
          sx={(theme) => ({
            top: theme.spacing.md,
            left: theme.spacing.md
          })}
        >
          x:xx:xx
        </Badge>
      </Card.Section>

      <Stack p="md" style={{ flexDirection: "row" }}>
        <Skeleton height={30} circle mb="sm" animate />
        <Box style={{ flexGrow: 1 }}>
          <Skeleton height={theme.spacing.lg} animate />
          <Skeleton height={2 * theme.spacing.lg} mt="sm" animate />
        </Box>
      </Stack>

      <Stack p="md" pt={0}>
        <Skeleton height={2 * theme.spacing.lg} />
      </Stack>
    </Card>
  );
}

export function SearchCard({
  channelAvatar,
  thumbnail,
  title,
  channelName,
  desc,
  shadow = "sm",
  duration
}: SearchCardProps) {
  const theme = useMantineTheme();

  return (
    (channelAvatar &&
      thumbnail &&
      title &&
      channelName &&
      desc &&
      duration && (
        <Card
          shadow={shadow}
          style={{
            width: "100%",
            maxWidth: 380,
            marginTop: 0
          }}
          p={0}
        >
          <Card.Section
            style={{
              position: "relative"
            }}
          >
            <Image src={thumbnail} height={160} alt={title} radius={0} />
            <Badge
              variant="filled"
              radius="md"
              style={{ position: "absolute" }}
              sx={(theme) => ({
                top: theme.spacing.md,
                left: theme.spacing.md
              })}
            >
              {duration}
            </Badge>
          </Card.Section>

          <Stack
            style={{
              flexDirection: "row",
              marginBottom: 5,
              marginTop: theme.spacing.sm
            }}
            p="md"
          >
            <Image
              src={channelAvatar}
              height={30}
              width={30}
              alt={title}
              radius="lg"
            />
            <Box>
              <Text
                size="sm"
                style={{
                  color: theme.colors.gray[7]
                }}
              >
                {channelName}
              </Text>
              <Text weight={500}>{title}</Text>
              {desc && (
                <Text size="sm" style={{ color: theme.colors.gray[7] }}>
                  {desc?.length <= 100 ? desc : `${desc?.substring(0, 100)}...`}
                </Text>
              )}
            </Box>
          </Stack>
          <Stack p="md" pt={0}>
            <Link href="">
              <Button color="blue" fullWidth>
                Draw on
              </Button>
            </Link>
          </Stack>
        </Card>
      )) || <SearchCardLoading />
  );
}
