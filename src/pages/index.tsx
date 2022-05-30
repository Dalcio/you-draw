import { AuthBtn, LibraryBtn } from "@components/Buttons";
import { HomeIntro } from "@components/Home";
import { Header } from "@components/Header";
import { Logo } from "@components/Logo";
import { Stack } from "@mantine/core";
import { VideoSearcher } from "@components/VideoSearcher";

export default function HomePage() {
  const isSigned = true;

  return (
    <div>
      <Header>
        <Logo />
        {(isSigned && <LibraryBtn />) || <AuthBtn />}
      </Header>
      <Stack
        align="center"
        p="lg"
        style={{
          width: "100%",
          position: "fixed",
          top: "70px"
        }}
      >
        <VideoSearcher activeForm="text-field" />
      </Stack>
      <HomeIntro />
    </div>
  );
}
