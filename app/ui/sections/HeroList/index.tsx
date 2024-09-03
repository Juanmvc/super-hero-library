"use client";
import React, { useCallback, useState } from "react";
import classes from "./heroList.module.scss";
import { HeroProps } from "@/app/core/domain/entities/Hero";
import HeroCard from "@/stories/heroCard/HeroCard";
import { useFavorites } from '../../hooks/useFavorites';
import InputFilter from "@/stories/inputFilter/InputFilter";
import getHeroList from "@/app/core/application/getHeroList";
import { debounce } from "@/app/utils/debounce";

const MODULE_PREFIX = "hero-list";

export default function HeroList({
  initialHeroList,
}: {
  initialHeroList: HeroProps[];
}) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const [filteredHeroes, setFilteredHeroes] = useState<HeroProps[]>(initialHeroList);

  const handleFilterChange = useCallback(
    debounce(async (filterValue: string) => {
      if (filterValue.trim()) {
        const newHeroes = await getHeroList({ limit: 50, nameStartsWith: filterValue });
        setFilteredHeroes(newHeroes);
      } else {
        setFilteredHeroes(initialHeroList);
      }
    }, 2000),
    []
  );

  const handleFavoriteToggle = useCallback((hero: HeroProps) => {
    if (favorites.find(h => h.id === hero.id)) {
      removeFavorite(hero.id);
    } else {
      hero._isFavorite = true;
      addFavorite(hero);
    }
  }, [favorites, addFavorite, removeFavorite]);

  return (
    <div className={classes[MODULE_PREFIX]}>
      <div data-testid="hero-list-page-filter" className={classes[`${MODULE_PREFIX}__filter`]}>
        <InputFilter placeholder="SEARCH A CHARACTER..." onChange={handleFilterChange} />
        {filteredHeroes.length} RESULTS
      </div>
      <div data-testid="hero-list-page-grid" className={classes[`${MODULE_PREFIX}__grid`]}>
        {filteredHeroes.map((hero) => (
          <HeroCard
            key={hero.id}
            title={hero.name}
            imageSrc={hero.imageUrl}
            url={`/hero/${hero.id}`}
            favorite={!!favorites.find(h => h.id === hero.id)}
            onFavoriteToggle={() => handleFavoriteToggle(hero)}
          />
        ))}
      </div>
    </div>
  );
}
