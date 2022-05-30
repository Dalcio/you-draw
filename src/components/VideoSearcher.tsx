import { Text } from "@mantine/core";
import { useEffect, useState } from "react";

import { SearchCard, SearchCardProps } from "./Cards";
import { SearchInput } from "./SearchInput";

type VideoSearcerProps = {
  activeForm: "button" | "text-field";
};

export function VideoSearcher({ activeForm }: VideoSearcerProps) {
  const [videoUrl, setVideoUrl] = useState<string | undefined>("");
  const [foundVideo, setFoundVideo] = useState<SearchCardProps | undefined>({});

  useEffect(() => {
    if (videoUrl) {
      const getVideo = async () => {
        setTimeout(() => {
          setFoundVideo({});
        }, 2 * 1000);
        setTimeout(() => {
          setFoundVideo(undefined);
        }, 4 * 1000);
      };

      getVideo();
    }
  }, [videoUrl]);

  return (
    <SearchInput
      placeholder="Type or paste link here"
      value={videoUrl}
      onChange={(text) => setVideoUrl(text)}
      activeForm={activeForm}
    >
      {(videoUrl && videoUrl?.length > 0 && (
        <>
          {(foundVideo && (
            <SearchCard shadow={undefined} {...foundVideo} />
          )) || (
            <Text p="xl" size="lg" align="center">
              The video was not Found. Please Verify the url
            </Text>
          )}
        </>
      )) || <div />}
    </SearchInput>
  );
}
