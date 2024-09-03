import Hero from "../../domain/entities/Hero";
import adaptMarvelHeroList from "../../infrastructure/marvelApi/adapters/adaptMarvelHeroList";
import { MarvelHeroList } from "../../infrastructure/marvelApi/apiTypes/MarvelHeroList";
import HeroListRepository from "../../infrastructure/marvelApi/repositories/HeroListRepository";

const getHeroList = async ({
    limit,
}: {
    limit: number;
}): Promise<Hero[]> => {
  const repository =
    new HeroListRepository<MarvelHeroList>();
  const { data } = await repository.getData({
    limit,
  });

  const HeroList = adaptMarvelHeroList(data);
  
  return HeroList;
};

export default getHeroList;
