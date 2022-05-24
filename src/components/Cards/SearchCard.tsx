import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  useMantineTheme,
  Stack,
  Box,
  Skeleton
} from "@mantine/core";
import Link from "next/link";

type SearchCardProps = {
  thumbnail?: string;
  title?: string;
  channelName?: string;
  channelAvatar?: string;
  videUrl?: string;
  desc?: string;
  duration?: string;
};

function SearchCardLoading() {
  const theme = useMantineTheme();

  return (
    <Card
      shadow="sm"
      p="lg"
      sx={(theme) => ({
        maxWidth: 340,
        marginTop: theme.spacing.sm,
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

      <Stack
        style={{
          flexDirection: "row",
          marginBottom: 5,
          marginTop: theme.spacing.sm
        }}
      >
        <Skeleton height={30} circle mb="sm" animate />
        <Box style={{ flexGrow: 1 }}>
          <Skeleton height={theme.spacing.lg} animate />
          <Skeleton height={2 * theme.spacing.lg} mt="sm" animate />
        </Box>
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
          shadow="sm"
          p="lg"
          style={{ maxWidth: 340, marginTop: theme.spacing.sm }}
        >
          <Card.Section style={{ position: "relative" }}>
            <Image src={thumbnail} height={160} alt={title} radius="md" />
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
          >
            <Image
              src={channelAvatar}
              height={30}
              width={30}
              alt={title}
              radius="lg"
            />
            <Box>
              <Text size="sm" style={{ color: theme.colors.gray[7] }}>
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

          <Link href="">
            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
            >
              Draw on
            </Button>
          </Link>
        </Card>
      )) || <SearchCardLoading />
  );
}
