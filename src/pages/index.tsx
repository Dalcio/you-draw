import { SearchCard, SearchCardProps } from "@components/Cards";
import { HomeHeader, HomeIntro } from "@components/Home";
import { SearchInput } from "@components/SearchInput";
import { Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react";

export default function HomePage() {
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
    <div>
      <HomeHeader />
      <Stack
        align="center"
        p="lg"
        style={{
          width: "100%",
          position: "fixed",
          top: "70px"
        }}
      >
        <SearchInput
          placeholder="Type or paste link here"
          value={videoUrl}
          onChange={(text) => setVideoUrl(text)}
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
      </Stack>
      <HomeIntro />
    </div>
  );
}
