import { ComicProps } from "@/app/core/domain/entities/Comic";
import { MarvelComic } from "../../apiTypes/MarvelComic";

function adaptComic(marvelComics: MarvelComic): ComicProps {

    const result = marvelComics.data.results[0]
    const match = result.resourceURI.match(/\/(\d+)$/);
    const id = match ? match[1] : '';

    return {id: +id, title: result.title, imageUrl: `${result.images[0]?.path}.${result.images[0]?.extension}`}
}
  
  export default adaptComic;