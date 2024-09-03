import getHero from "@/app/core/application/getHero";
import Navbar from "@/stories/navbar/Navbar";
import marvelLogo from "../../../public/logos/marvel-logo.svg";
import classes from "./page.module.scss";
import HeroHeader from "@/app/ui/sections/HeroHeader";
import ComicList from "@/app/ui/sections/ComicList";
import getComic from "@/app/core/application/getComic";
import { ComicProps } from "@/app/core/domain/entities/Comic";

const MODULE_PREFIX = "page-hero";

async function HeroDetailPage(context: {
  params: { heroID: string };
}) {
  const heroID = +context.params.heroID;

  if (!isNaN(heroID) && heroID !== undefined) {
    const hero = await getHero({ id: heroID });

    const heroComics = await Promise.all(
      hero.comics.map(async (comic: ComicProps) => {
        const comicResult = await getComic({ id: comic.id });
        return comicResult;
      })
    );

    return (
      <div className={classes[MODULE_PREFIX]}>
        <Navbar logoSrc={marvelLogo} logoUrl={"/"} iconUrl={"/favorites"}/>
        <HeroHeader hero={hero}/>
        <div className={classes[`${MODULE_PREFIX}__title`]}>
          COMICS
        </div>
        <ComicList comicList={heroComics} />
      </div>
    );
  }

  return <div>Loading...</div>;
}

export default HeroDetailPage;
