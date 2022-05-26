// import { AuthBtn, LibraryBtn } from "@components/Buttons";
// import { SearchCard } from "@components/Cards";
// import { SearchInput } from "@components/Inputs";
// import { Stack } from "@mantine/core";
import { useState } from "react";

export default function HomePage() {
  const [value, setValue] = useState<string | undefined>("");
  return (
    <div>
      <h1>{value}</h1>
    </div>
    // <Stack align="center">
    // {/* <AuthBtn />
    // <LibraryBtn /> */}
    //   {/* <SearchInput
    //     placeholder="Type or paste link here"
    //     onChange={setValue}
    //     value={value}
    //   >
    //     <SearchCard shadow={undefined} />
    //   </SearchInput> */}
    // // </Stack>
  );
}
