import {
  Card,
  Image,
  Text,
  useMantineTheme,
  Stack,
  Box,
  Skeleton
} from "@mantine/core";
import type { TLibraryVideo } from "@types";

import useCardStyles from "./Cards.styles";

type VideoCardProps = TLibraryVideo & {
  view?: "board" | "list";
};

type VideoCardViewProps = Omit<VideoCardProps, "id" | "view"> & {
  href: string;
};

function VideoCardBoardViewLoadingd() {
  const { spacing } = useMantineTheme();
  const { classes } = useCardStyles();

  return (
    <Card
      shadow="sm"
      p="lg"
      className={classes.container}
      style={{ display: "block" }}
    >
      <Card.Section>
        <Skeleton height={160} width="100%" animate />
      </Card.Section>
      <Box mt="sm">
        <Skeleton height={spacing.md} mb="sm" animate />
        <Skeleton height={2 * spacing.lg} animate />
      </Box>
    </Card>
  );
}

const VideoCardBoardView = ({
  href,
  cover,
  name,
  notes
}: VideoCardViewProps) => {
  const { classes } = useCardStyles();
  return (
    <Card
      shadow="sm"
      p="lg"
      className={classes.container}
      style={{ display: "block" }}
      component="a"
      href={href}
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
};

function VideoCardListViewLoadingd() {
  const { spacing } = useMantineTheme();
  const { classes } = useCardStyles();

  return (
    <Card shadow="sm" className={classes.container}>
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

const VideoCardListView = ({
  href,
  cover,
  name,
  notes
}: VideoCardViewProps) => {
  const { classes } = useCardStyles();

  return (
    <Card className={classes.container} component="a" href={href}>
      <Image
        className="cover"
        src={cover}
        height="93px"
        width="93px"
        alt={name}
        radius="sm"
      />
      <Box className="border">
        <Text weight={500}>
          {name?.substring(0, 48)}
          {name && name?.length > 48 && "..."}
        </Text>
        {notes && (
          <Text size="sm" sx={(theme) => ({ color: theme.colors.gray[7] })}>
            {notes?.length <= 100 ? notes : `${notes?.substring(0, 100)}...`}
          </Text>
        )}
      </Box>
    </Card>
  );
};

export function VideoCard({
  cover,
  name,
  id,
  notes,
  view = "board"
}: VideoCardProps) {
  return (
    (cover && name && id && (
      <>
        {(view === "board" && (
          <VideoCardBoardView
            href={`player/id=${id}`}
            cover={cover}
            notes={notes}
            name={name}
          />
        )) || (
          <VideoCardListView
            href={`player/id=${id}`}
            cover={cover}
            notes={notes}
            name={name}
          />
        )}
      </>
    )) ||
    (view === "board" ? (
      <VideoCardBoardViewLoadingd />
    ) : (
      <VideoCardListViewLoadingd />
    ))
  );
}
