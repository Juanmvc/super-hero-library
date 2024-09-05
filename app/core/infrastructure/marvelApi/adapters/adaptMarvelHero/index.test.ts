import adaptHero from '.';
import { mockMarvelHeroRepositoryData } from '../../repositories/HeroRepository/__fixtures__';
import {  mockAdaptedHero } from './__fixtures__';

describe('adaptMarvelHero adapter', () => {
  it('should return the Hero entity with the correct format', () => {
    const adapterResult = adaptHero(
        mockMarvelHeroRepositoryData
    );

    expect(adapterResult).toEqual(mockAdaptedHero);
  });
});
