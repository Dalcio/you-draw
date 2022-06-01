import type { GetServerSideProps } from "next";

import Head from "next/head";

export default function PlayerPage({ video }) {
  return (
    <>
      <Head>
        <title>{video.name}</title>
      </Head>
      <h1>View the video Page</h1>
      <h3> Drawing Video: {video?.id} </h3>
      <h3> Drawing Video: {video?.name} </h3>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;

  const video = {
    name: "Video Name",
    id
  };

  return {
    props: {
      video
    }
  };
};
