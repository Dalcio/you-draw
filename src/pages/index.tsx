import { AuthBtn, LibraryBtn } from "@components/Buttons";
import { SearchCard } from "@components/Cards";

export default function HomePage() {
  return (
    <>
      <AuthBtn />
      <LibraryBtn />
      <SearchCard
        onClick={() => {}}
        desc="Please click anywhere on this card to claim your reward, this is not a
        fraud, trust us"
        duration="6:08"
        videUrl="https://www.youtube.com/watch?v=mFsgx121c_Y"
        title="Me Salva! ITD01 - Introdução as integrais duplas"
        thumbnail="https://i.ytimg.com/vi/2nFRQnmgS48/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCU9egiP4TiSE1leFk58N74Ub9Ybg"
        channelName="Me Salva! ENEM 2022"
        channelAvatar="https://yt3.ggpht.com/MlojA7tIjqWgebm5VCzcwjTsPuU_HiaSIh6NT6WLGaG-e2oaM36PIRD1KMip9YbRn2dA8_l5=s48-c-k-c0x00ffffff-no-rj"
      />
    </>
  );
}
