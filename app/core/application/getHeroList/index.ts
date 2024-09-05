import { HeroProps } from "../../domain/entities/Hero";
import adaptHeroList from "../../infrastructure/marvelApi/adapters/adaptMarvelHeroList";
import { MarvelHeroList } from "../../infrastructure/marvelApi/apiTypes/MarvelHeroList";
import HeroListRepository from "../../infrastructure/marvelApi/repositories/HeroListRepository";

const getHeroList = async ({
    limit,
    nameStartsWith,
}: {
    limit: number;
    nameStartsWith?: string,
}): Promise<HeroProps[]> => {
  const repository =
    new HeroListRepository<MarvelHeroList>();
  const { data } = await repository.getData({
    limit,
    nameStartsWith
  });

  const HeroList = adaptHeroList(data);
  
  return HeroList;
};

export default getHeroList;
