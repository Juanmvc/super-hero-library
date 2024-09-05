import { ComicProps } from "../../domain/entities/Comic";
import adaptComic from "../../infrastructure/marvelApi/adapters/adaptMarvelComic";
import { MarvelComic } from "../../infrastructure/marvelApi/apiTypes/MarvelComic";
import ComicRepository from "../../infrastructure/marvelApi/repositories/ComicRepository";

const getComic = async ({
    id,
}: {
    id: number;
}): Promise<ComicProps> => {
  const repository =
    new ComicRepository<MarvelComic>();
  const { data } = await repository.getData({
    id,
  });

  const Comic = adaptComic(data);

  console.log(Comic)
  
  return Comic;
};

export default getComic;
