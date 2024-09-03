import getHero from "@/app/core/application/getHero";
//import classes from "./page.module.scss";
import Navbar from "@/stories/navbar/Navbar";
import marvelLogo from "../../../public/logos/marvel-logo.svg";
import HeroHeader from "@/app/ui/sections/HeroHeader";
import ComicList from "@/app/ui/sections/ComicList";
import getComic from "@/app/core/application/getComic";
import { ComicProps } from "@/app/core/domain/entities/Comic";


async function PodcastEpisodeDetailPage(context: {
  params: { heroID: string };
}) {
  const heroID = +context.params.heroID;

  const hero = await getHero({ id: heroID });

  const heroComics = await Promise.all(
    hero.comics.map(async (comic: ComicProps) => {
      const comicResult = await getComic({ id: comic.id });
      return comicResult;
    })
  );

  return (
    <div>
      <Navbar logoSrc={marvelLogo} logoUrl={"/"} iconUrl={"/"}/>
      <HeroHeader hero={hero}/> 
      <ComicList comicList={heroComics} />
    </div>
  );
}

export default PodcastEpisodeDetailPage;
