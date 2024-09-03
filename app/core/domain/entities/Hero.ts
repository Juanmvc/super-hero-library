import { ComicProps } from './Comic'

export type HeroWithFavorites = {
    favorites: HeroProps[];
}

export type HeroProps = {
    id: number
    name: string
    imageUrl: string
    description: string
    _isFavorite: boolean
    comics: ComicProps[]
}
