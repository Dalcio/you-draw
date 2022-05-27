import { SearchInput } from ".";
import { SearchCard } from "../Cards";

export default {
  title: "Search Inputs"
};

export const FilterVideos = () => (
  <SearchInput
    placeholder="Search for your videos"
    onChange={(text) => alert(text)}
  >
    <h1>Filter Input</h1>
  </SearchInput>
);

export const FilterVideosLoading = () => (
  <SearchInput
    placeholder="Search for your videos"
    onChange={(text) => alert(text)}
  >
    <h1>Filter Input Loading</h1>
  </SearchInput>
);

export const SearchVideo = () => (
  <SearchInput
    placeholder="Type or paste link here"
    onChange={(text) => alert(text)}
  >
    <SearchCard
      shadow={undefined}
      desc="O momento econômico conturbado do mundo chegou no setor da tecnologia, muitas big techs estão colocando o pé no freio em novas contratações e começa a afetar inicialmente "
      duration="18:15"
      videUrl="https://i.ytimg.com/vi/F6wJ8vYmeVE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPF-XOHvKRsjy7DHSy3cZg_5gGvg"
      title="POR QUE AS BIG TECHS ESTÃO PARANDO DE CONTRATAR?"
      thumbnail="https://i.ytimg.com/vi/F6wJ8vYmeVE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPF-XOHvKRsjy7DHSy3cZg_5gGvg"
      channelName="Código Fonte TV"
      channelAvatar="https://yt3.ggpht.com/ytc/AKedOLTxp_yA1EqeS8rPJDe4m5qExsd3-OKqmlB3M6Oq5A=s48-c-k-c0x00ffffff-no-rj"
    />
  </SearchInput>
);

export const SearchVideoLoading = () => (
  <SearchInput
    placeholder="Type or paste link here"
    onChange={(text) => alert(text)}
  >
    <SearchCard shadow={undefined} />
  </SearchInput>
);
