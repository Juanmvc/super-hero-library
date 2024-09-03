import Hero from "../../domain/entities/Hero";
import adaptMarvelHero from "../../infrastructure/marvelApi/adapters/adaptMarvelHero";
import { MarvelHeroList } from "../../infrastructure/marvelApi/apiTypes/MarvelHeroList";
import HeroRepository from "../../infrastructure/marvelApi/repositories/HeroRepository";

const getHero = async ({
    id,
}: {
    id: number;
}): Promise<Hero> => {
  const repository =
    new HeroRepository<MarvelHeroList>();
  const { data } = await repository.getData({
    id,
  });

  const Hero = adaptMarvelHero(data);
  
  return Hero;
};

export default getHero;
