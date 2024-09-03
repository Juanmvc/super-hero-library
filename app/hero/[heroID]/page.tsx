import getHero from "@/app/core/application/getHero";
//import classes from "./page.module.scss";
import Navbar from "@/stories/navbar/Navbar";
import marvelLogo from "../../../public/logos/marvel-logo.svg";
import HeroHeader from "@/app/ui/sections/HeroHeader";
import ComicList from "@/app/ui/sections/ComicList";
import getComic from "@/app/core/application/getComic";


async function PodcastEpisodeDetailPage(context: {
  params: { heroID: string };
}) {
  const heroID = +context.params.heroID;

  const hero = await getHero({ id: heroID });
  const heroPrimitive = hero.toPrimitive();

  const heroComics = await Promise.all(
    heroPrimitive.comics.map(async (comic) => {
      const comicResult = await getComic({ id: comic.id });
      return comicResult;
    })
  );

  return (
    <div>
      <Navbar logoSrc={marvelLogo} logoUrl={"/"} iconUrl={"/"}/>
      <HeroHeader heroPrimitive={heroPrimitive}/> 
      <ComicList comicList={heroComics} />
    </div>
  );
}

export default PodcastEpisodeDetailPage;
