import { Button } from "@mantine/core";
import { VideoIcon } from "@modulz/radix-icons";

import Link from "next/link";

export function LibraryBtn() {
  return (
    <>
      <Link href="library">
        <Button size="md" variant="white" p={0} leftIcon={<VideoIcon />}>
          Library
        </Button>
      </Link>
    </>
  );
}
