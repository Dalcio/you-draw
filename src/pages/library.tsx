import { Header } from "@components/Header";
import { Logo } from "@components/Logo";
import { Library } from "@components/Library";

import Link from "next/link";

export default function LibraryPage() {
  return (
    <>
      <Header>
        <Link href="/">
          <Logo />
        </Link>
      </Header>
      <Library />
    </>
  );
}
