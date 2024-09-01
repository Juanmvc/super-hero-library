import Hero, { HeroProps } from "@/app/core/domain/entities/Hero";
import { MarvelHeroList } from "../../apiTypes/MarvelHeroList";

function adaptHeroList(marvelHeroes: MarvelHeroList): Hero[] {
    return marvelHeroes.data.results.map((result) => {
      const hero: HeroProps = {
        id: result.id,
        name: result.name,
        imageUrl: `${result.thumbnail.path}.${result.thumbnail.extension}`,
        description: result.description,
        isFavorite: false, // Todos los héroes son inicialmente no favoritos
        comics: []
      };
  
      return new Hero(hero);
    });
  }
  
  export default adaptHeroList;