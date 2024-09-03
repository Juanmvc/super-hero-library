"use client"
import React from 'react'
import Navbar from '@/stories/navbar/Navbar'
import marvelLogo from "../../public/logos/marvel-logo.svg";
import classes from "./page.module.scss";
import HeroList from '../ui/sections/HeroList'
import { useFavorites } from '../ui/hooks/useFavorites'

const MODULE_PREFIX = "page-favorites";

function FavoritesListPage() {
    const { favorites } = useFavorites();

    return (
        <div className={classes[MODULE_PREFIX]}>
            <Navbar logoSrc={marvelLogo} logoUrl={'/'} iconUrl={'/favorites'} />
            <div className={classes[`${MODULE_PREFIX}__title`]}>FAVORITES</div>
            <HeroList initialHeroList={favorites} />
        </div>
    )
}

export default FavoritesListPage;

