import adaptHeroList from '.';
import { mockMarvelHeroListRepositoryData } from '../../repositories/HeroListRepository/__fixtures__';
import {  mockAdaptedHeroList } from './__fixtures__';

describe('adaptMarvelHeroList adapter', () => {
  it('should return the Hero List entities with the correct format', () => {
    const adapterResult = adaptHeroList(
        mockMarvelHeroListRepositoryData
    );

    expect(adapterResult).toEqual(mockAdaptedHeroList);
  });
});
