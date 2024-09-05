import { HeroProps } from "../../domain/entities/Hero";
import adaptHero from "../../infrastructure/marvelApi/adapters/adaptMarvelHero";
import { MarvelHeroList } from "../../infrastructure/marvelApi/apiTypes/MarvelHeroList";
import HeroRepository from "../../infrastructure/marvelApi/repositories/HeroRepository";

const getHero = async ({
    id,
}: {
    id: number;
}): Promise<HeroProps> => {
  const repository =
    new HeroRepository<MarvelHeroList>();
  const { data } = await repository.getData({
    id,
  });

  const Hero = adaptHero(data);
  
  return Hero;
};

export default getHero;
