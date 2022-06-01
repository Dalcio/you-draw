import { Header } from "@components/Header";
import { VideoSearcher } from "@components/VideoSearcher";
import { Logo } from "@components/Logo";
import { Library } from "@components/Library";
import { Button, Stack } from "@mantine/core";
import { TLibraryVideo } from "@types";
import { v4 as uuid } from "uuid";

import Link from "next/link";

type LibraryPageProps = {
  videos: TLibraryVideo[];
};

export default function LibraryPage({ videos }: LibraryPageProps) {
  return (
    <>
      <Header>
        <Link href="/">
          <Button variant="white">
            <Logo />
          </Button>
        </Link>
        <VideoSearcher activeForm="button" />
      </Header>
      <Stack p="lg" align="center" style={{ minHeight: "100vh" }}>
        <Library videos={videos} />
      </Stack>
    </>
  );
}

export const getServerSideProps = () => {
  const videos: TLibraryVideo[] = Array(19).fill({
    id: uuid(),
    cover:
      "https://i.ytimg.com/vi/NCvI-K0Gp90/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWz4k7jw5omzFoEEA06RYYas1CtQ",
    name:
      "Start Automating Your Life Using Python! (File Management with Python",
    notes:
      "Sign up to Morning Brew for free today https://morningbrewdaily.com/internet..."
  });

  return { props: { videos } };
};
