'use client'
import React, { useCallback } from 'react'
import classes from './heroHeader.module.scss'
import Image from 'next/image'
import Hero, { HeroPrimitiveProps } from '@/app/core/domain/entities/Hero'
import { useFavorites } from '../../hooks/useFavorites'
import heartFullIcon from '../../../../public/icons/heart-full.svg'
import heartEmptyIcon from '../../../../public/icons/heart-empty.svg'

const MODULE_PREFIX = 'hero-header'

export default function HeroHeader({ heroPrimitive }: { heroPrimitive: HeroPrimitiveProps }) {
    const { favorites, addFavorite, removeFavorite } = useFavorites()

    const hero = Hero.fromPrimitive(heroPrimitive);

    const handleFavoriteToggle = useCallback(
        (hero: Hero) => {
            if (favorites.find((h) => h.id === hero.id) !== undefined) {
                removeFavorite(hero.id)
            } else {
                hero._isFavorite = true
                addFavorite(hero)
            }
        },
        [favorites, addFavorite, removeFavorite]
    )

    return (
        <div className={classes[MODULE_PREFIX]}>
            <div className={classes[`${MODULE_PREFIX}__wrapper`]}>
                <Image
                    width={278}
                    height={278}
                    src={hero.imageUrl}
                    className={classes[`${MODULE_PREFIX}__img`]}
                    alt="Hero image"
                />
                <div className={classes[`${MODULE_PREFIX}__information`]}>
                    <div
                        className={
                            classes[
                                `${MODULE_PREFIX}__information__title-container`
                            ]
                        }
                    >
                        <h3
                            className={
                                classes[`${MODULE_PREFIX}__information__title`]
                            }
                        >
                            {hero.name}
                        </h3>
                        <div
                            onClick={() => handleFavoriteToggle(hero)}
                            className={
                                classes[
                                    `${MODULE_PREFIX}__information__icon-container`
                                ]
                            }
                        >
                            <Image
                                width={24}
                                height={24}
                                src={
                                    favorites.find((h) => h.id === hero.id) !==
                                    undefined
                                        ? heartFullIcon
                                        : heartEmptyIcon
                                }
                                alt="Favorites list icon heart"
                            />
                        </div>
                    </div>
                    <div
                        className={
                            classes[
                                `${MODULE_PREFIX}__information__description`
                            ]
                        }
                    >
                        {hero.description ? hero.description : "There is no description for this hero"}
                    </div>
                </div>
            </div>
        </div>
    )
}
