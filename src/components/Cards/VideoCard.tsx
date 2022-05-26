import {
  Card,
  Image,
  Text,
  useMantineTheme,
  Stack,
  Box,
  Skeleton
} from "@mantine/core";
import Link from "next/link";

type VideoCardProps = {
  cover?: string;
  name?: string;
  id?: string;
  notes?: string;
  view?: "board" | "list";
};

type VideoCardViewProps = Omit<VideoCardProps, "id" | "view">;

function VideoCardBoardViewLoadingd() {
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
      <Card.Section>
        <Skeleton height={160} width="100%" animate />
      </Card.Section>
      <Box mt="sm">
        <Skeleton height={theme.spacing.md} mb="sm" animate />
        <Skeleton height={2 * theme.spacing.lg} animate />
      </Box>
    </Card>
  );
}

const VideoCardBoardView = ({ cover, name, notes }: VideoCardViewProps) => (
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
    <Card.Section>
      <Image src={cover} height={160} alt={name} />
    </Card.Section>
    <Box mt="sm">
      <Text weight={500}>{name}</Text>
      {notes && (
        <Text size="sm" sx={(theme) => ({ color: theme.colors.gray[7] })}>
          {notes?.length <= 100 ? notes : `${notes?.substring(0, 100)}...`}
        </Text>
      )}
    </Box>
  </Card>
);

function VideoCardListViewLoadingd() {
  const { spacing } = useMantineTheme();

  return (
    <Card
      shadow="sm"
      p="lg"
      sx={(theme) => ({
        marginTop: theme.spacing.sm,
        "&:hover": {
          cursor: "pointer",
          opacity: 0.8
        }
      })}
    >
      <Stack style={{ flexDirection: "row" }}>
        <Skeleton
          height={2 * spacing.lg + spacing.md + spacing.sm}
          width={2 * spacing.lg + spacing.md + spacing.sm}
          animate
        />
        <Box style={{ flexGrow: 1 }}>
          <Skeleton height={spacing.md} mb="sm" animate />
          <Skeleton height={2 * spacing.lg} animate />
        </Box>
      </Stack>
    </Card>
  );
}

const VideoCardListView = ({ cover, name, notes }: VideoCardViewProps) => (
  <Card
    shadow="sm"
    p="lg"
    sx={(theme) => ({
      marginTop: theme.spacing.sm,
      "&:hover": {
        cursor: "pointer",
        opacity: 0.8
      }
    })}
  >
    <Stack style={{ flexDirection: "row" }}>
      <Image src={cover} height={60} width={60} alt={name} radius="sm" />
      <Box>
        <Text weight={500}>{name}</Text>
        {notes && (
          <Text size="sm" sx={(theme) => ({ color: theme.colors.gray[7] })}>
            {notes?.length <= 100 ? notes : `${notes?.substring(0, 100)}...`}
          </Text>
        )}
      </Box>
    </Stack>
  </Card>
);

export function VideoCard({
  cover,
  name,
  id,
  notes,
  view = "board"
}: VideoCardProps) {
  return (
    (cover && name && id && (
      <Link href={`studio/id=${id}`}>
        {(view === "board" && (
          <VideoCardBoardView cover={cover} notes={notes} name={name} />
        )) || <VideoCardListView cover={cover} notes={notes} name={name} />}
      </Link>
    )) ||
    (view === "board" ? (
      <VideoCardBoardViewLoadingd />
    ) : (
      <VideoCardListViewLoadingd />
    ))
  );
}
