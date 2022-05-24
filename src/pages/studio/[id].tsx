import { useRouter } from "next/router";

export default function DrawPage() {
  const { query } = useRouter();
  const { id } = query;

  return (
    <>
      <h1>Please Sign In</h1>
      <h3> Drawing Video: {id} </h3>
    </>
  );
}
