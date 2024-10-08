import { HeroProps } from "@/app/core/domain/entities/Hero";
import { MarvelHeroList } from "../../apiTypes/MarvelHeroList";

function adaptHeroList(marvelHeroes: MarvelHeroList): HeroProps[] {
  return marvelHeroes.data.results.map((result) => ({
    id: result.id,
    name: result.name,
    imageUrl: `${result.thumbnail.path}.${result.thumbnail.extension}`,
    description: result.description,
    _isFavorite: false, // at start all heroes are not in the favorites list
    comics: result.comics.items.map((comic) => {
      const match = comic.resourceURI.match(/\/(\d+)$/);
      const id = match ? match[1] : '';
      return { title: comic.name, id: +id };
    }),
  }));
}

export default adaptHeroList;