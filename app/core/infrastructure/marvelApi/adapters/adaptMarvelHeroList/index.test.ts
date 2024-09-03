import adaptHeroList from '.';
import { mockMarvelHeroListRepositoryData } from '../../repositories/HeroListRepository/__fixtures__';
import {  mockAdaptedHeroList } from './__fixtures__';

describe('adaptBankAccountsCategoryGroups adapter', () => {
  it('should return the category bank accounts entities with the correct format', () => {
    const adapterResult = adaptHeroList(
        mockMarvelHeroListRepositoryData
    );

    expect(adapterResult).toEqual(mockAdaptedHeroList);
  });
});
