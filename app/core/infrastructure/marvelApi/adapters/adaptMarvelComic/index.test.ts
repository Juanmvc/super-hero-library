import adaptHeroList from '.';
import { mockMarvelComicRepositoryData } from '../../repositories/ComicRepository/__fixtures__';
import {  mockAdaptedComic } from './__fixtures__';

describe('adaptMarvelComic adapter', () => {
  it('should return the comic entity with the correct format', () => {
    const adapterResult = adaptHeroList(
        mockMarvelComicRepositoryData
    );

    expect(adapterResult).toEqual(mockAdaptedComic);
  });
});
