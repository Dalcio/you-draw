import { Stack, Text } from "@mantine/core";
import type { TLibraryVideo } from "@types";
import { useState } from "react";

import { SearchInput } from "../SearchInput";
import { VideoCard } from "@components/Cards";

const NotFFound = () => (
  <Text p="xl" size="lg" align="center">
    The video was not Found. Please Verify the url
  </Text>
);

type FilterVideosProps = {
  videos: TLibraryVideo[];
};

export function FilterVideos({ videos }: FilterVideosProps) {
  const [filteredVides, setFilteredVideos] = useState<
    TLibraryVideo[] | undefined
  >(undefined);

  const onFilterStart = (text: string) => {
    if (text) {
      const temp = videos.filter(({ name }) =>
        name?.toLowerCase().includes(text.toLowerCase())
      );

      setFilteredVideos([...temp]);
    } else {
      setFilteredVideos([]);
    }
  };

  return (
    <SearchInput
      placeholder="Search for your videos"
      onChange={onFilterStart}
      activeForm="text-field"
    >
      {filteredVides
        ? (filteredVides.length === 0 && <NotFFound />) || (
            <Stack spacing="md" p="md">
              {filteredVides.map((video) => (
                <VideoCard {...video} view="list" />
              ))}
            </Stack>
          )
        : null}
    </SearchInput>
  );
}
