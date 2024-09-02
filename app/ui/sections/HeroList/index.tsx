"use client";
import React, { useCallback } from "react";
import classes from "./heroList.module.scss";
import Hero, { HeroPrimitiveProps } from "@/app/core/domain/entities/Hero";
import HeroCard from "@/stories/heroCard/HeroCard";
import { useFavorites } from '../../hooks/useFavorites';

const MODULE_PREFIX = "hero-list";

export default function HeroList({
  heroList,
}: {
  heroList: HeroPrimitiveProps[];
}) {
  const heroEntityList = heroList.map((hero) => Hero.fromPrimitive({ ...hero }));

  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const handleFavoriteToggle = useCallback((hero: Hero) => {
    if (favorites.find(h => h.id === hero.id) !== undefined) {
      removeFavorite(hero.id);
    } else {
      hero._isFavorite = true;
      addFavorite(hero);
    }
  }, [favorites, addFavorite, removeFavorite]);

  return (
    <div className={classes[MODULE_PREFIX]}>
      <div data-testid="hero-list-page-filter" className={classes[`${MODULE_PREFIX}__filter`]}>
        Total de héroes: {heroEntityList.length}
      </div>
      <div data-testid="hero-list-page-grid" className={classes[`${MODULE_PREFIX}__grid`]}>
        {heroEntityList.map((hero) => (
          <HeroCard
            key={hero.id}
            title={hero.name}
            imageSrc={hero.imageUrl}
            url={`/hero/${hero.id}`}
            favorite={favorites.find(h => h.id === hero.id) !== undefined }
            onFavoriteToggle={() => handleFavoriteToggle(hero)}
          />
        ))}
      </div>
    </div>
  );
}
