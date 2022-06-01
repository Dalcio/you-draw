import { VideoCard } from "@components/Cards";
import { Box, Stack, Tabs, Text } from "@mantine/core";
import { TLibraryVideo } from "@types";
import { LayoutBoard, LayoutList } from "tabler-icons-react";

import useLibraryStyles, { StyledTabs } from "./Library.styles";
import { FilterVideos } from "./FilterVideos";
import { v4 as uuid } from "uuid";

type LibraryProps = {
  videos: TLibraryVideo[];
};

export function Library({ videos }: LibraryProps) {
  const { classes } = useLibraryStyles();

  const EmptyLibrary = () => (
    <Text p="xl" size="xl" color="gray" align="center">
      Your library is empty
    </Text>
  );

  const BoardView = (
    <Tabs.Tab label="Board" icon={<LayoutBoard size={14} />}>
      <Box className={classes.boardGrid}>
        {videos.map((video) => (
          <VideoCard {...video} key={uuid()} />
        ))}
      </Box>
    </Tabs.Tab>
  );

  const ListView = (
    <Tabs.Tab label="List" icon={<LayoutList size={14} />}>
      <Stack>
        {videos.map((video) => (
          <VideoCard {...video} view="list" key={uuid()} />
        ))}
      </Stack>
    </Tabs.Tab>
  );

  return (
    <Stack pt="xl" mt="xl" spacing="lg" style={{ width: "min(100%, 780px)" }}>
      {(videos && videos.length > 0 && (
        <>
          <FilterVideos videos={videos} />
          <StyledTabs>
            {BoardView}
            {ListView}
          </StyledTabs>
        </>
      )) || <EmptyLibrary />}
    </Stack>
  );
}
