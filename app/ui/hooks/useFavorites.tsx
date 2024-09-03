"use client"
import { HeroProps } from '@/app/core/domain/entities/Hero';
import React, { createContext, useState, useContext } from 'react';

interface FavoritesContextType {
  favorites: HeroProps[];
  addFavorite: (hero: HeroProps) => void;
  removeFavorite: (heroId: number) => void;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<HeroProps[]>([]);

  const addFavorite = (hero: HeroProps) => {
    setFavorites(prev => [...prev, hero]);
  };

  const removeFavorite = (heroId: number) => {
    setFavorites(prev => prev.filter(h => h.id !== heroId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within an FavoritesProvider');
  }
  return context;
};

export const getFavoritesCount = () => {
  const context = useContext(FavoritesContext);
  return context?.favorites.length;
};
