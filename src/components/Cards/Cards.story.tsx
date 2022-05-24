import { SearchCard } from "./SearchCard";
import { VideoCard } from "./VideoCard";
import { uuid } from "uuidv4";

export default {
  title: "Cards"
};

export const SearchCardVideo = () => (
  <SearchCard
    desc="Please click anywhere on this card to claim your reward, this is not a
  fraud, trust us"
    duration="6:08"
    videUrl="https://www.youtube.com/watch?v=mFsgx121c_Y"
    title="Me Salva! ITD01 - Introdução as integrais duplas"
    thumbnail="https://i.ytimg.com/vi/2nFRQnmgS48/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCU9egiP4TiSE1leFk58N74Ub9Ybg"
    channelName="Me Salva! ENEM 2022"
    channelAvatar="https://yt3.ggpht.com/MlojA7tIjqWgebm5VCzcwjTsPuU_HiaSIh6NT6WLGaG-e2oaM36PIRD1KMip9YbRn2dA8_l5=s48-c-k-c0x00ffffff-no-rj"
  />
);

export const SearchCardVideoLoading = () => <SearchCard />;

export const VideoCardBoardView = () => (
  <VideoCard
    cover="https://i.ytimg.com/vi/2nFRQnmgS48/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCU9egiP4TiSE1leFk58N74Ub9Ybg"
    id={uuid()}
    name="Integral Dupla"
    notes="Please click anywhere on this card to claim your reward, this is not a"
  />
);

export const VideoCardBoardViewLoading = () => <VideoCard />;

export const VideoCardListViewItem = () => (
  <VideoCard
    view="list"
    cover="https://i.ytimg.com/vi/2nFRQnmgS48/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCU9egiP4TiSE1leFk58N74Ub9Ybg"
    id={uuid()}
    name="Integral Dupla"
    notes="Please click anywhere on this card to claim your reward, this is not a"
  />
);

export const VideoCardListViewItemLoading = () => <VideoCard view="list" />;

// export const = ()=></>
