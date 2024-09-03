import { ComicProps } from "../../domain/entities/Comic";
import adaptMarvelComic from "../../infrastructure/marvelApi/adapters/adaptMarvelComic";
import { MarvelComicList } from "../../infrastructure/marvelApi/apiTypes/MarvelComicList";
import ComicRepository from "../../infrastructure/marvelApi/repositories/ComicRepository";

const getComic = async ({
    id,
}: {
    id: number;
}): Promise<ComicProps> => {
  const repository =
    new ComicRepository<MarvelComicList>();
  const { data } = await repository.getData({
    id,
  });

  const Comic = adaptMarvelComic(data);
  
  return Comic;
};

export default getComic;
