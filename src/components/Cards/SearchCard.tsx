import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
  Box,
  Stack,
  Paper
} from "@mantine/core";
import Link from "next/link";

type SearchCardProps = {
  onClick?: () => void;
  thumbnail?: string;
  title?: string;
  channelName?: string;
  channelAvatar?: string;
  videUrl?: string;
  desc?: string;
  duration?: string;
};

export function SearchCard({
  channelAvatar,
  thumbnail,
  title,
  channelName,
  onClick,
  desc,
  duration
}: SearchCardProps) {
  return (
    <Card shadow="sm" p="lg">
      <Stack style={{ flexDirection: "row" }}>
        <Box style={{ position: "relative" }}>
          <Image src={thumbnail} alt={title} radius="md" />
          <Badge
            variant="filled"
            radius="md"
            style={{ position: "absolute" }}
            sx={(theme) => ({ top: theme.spacing.md, left: theme.spacing.md })}
          >
            {duration}
          </Badge>
        </Box>
        <Box>
          <Stack style={{ flexDirection: "row" }}>
            <Image src={channelAvatar} height={30} alt={title} radius="md" />
            <Text weight={500}>{channelName}</Text>
          </Stack>
          <Text weight={500}>{title}</Text>
          {desc && (
            <Text size="sm">
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
  );
}
