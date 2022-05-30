import { Header } from "@components/Header";
import { VideoSearcher } from "@components/VideoSearcher";
import { Logo } from "@components/Logo";
import { Library } from "@components/Library";
import { Button } from "@mantine/core";

import Link from "next/link";

export default function LibraryPage() {
  return (
    <>
      <Header>
        <Link href="/">
          <Logo />
        </Link>
        <VideoSearcher activeForm="button" />
      </Header>
      <Library />
    </>
  );
}
