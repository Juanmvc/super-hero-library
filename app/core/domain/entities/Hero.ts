import { ComicProps } from './Comic'

export type HeroWithFavorites = {
    favorites: Hero[];
}

export type HeroProps = {
    id: number
    name: string
    imageUrl: string
    description: string
    _isFavorite: boolean
    comics: ComicProps[]
}

export type HeroPrimitiveProps = {
    id: number
    name: string
    imageUrl: string
    description: string
    _isFavorite: boolean
    comics: ComicProps[]
}

export default class Hero {
    readonly id: number

    readonly name: string

    readonly imageUrl: string

    readonly description: string

    public _isFavorite: boolean

    readonly comics: ComicProps[]

    constructor({
        id,
        name,
        imageUrl,
        description,
        _isFavorite = false,
        comics,
    }: HeroProps) {
        this.id = id
        this.name = name
        this.imageUrl = imageUrl
        this.description = description
        this._isFavorite = _isFavorite
        this.comics = comics
    }

    toPrimitive(): HeroPrimitiveProps {
        return {
            id: this.id,
            name: this.name,
            imageUrl: this.imageUrl,
            description: this.description,
            _isFavorite: this._isFavorite,
            comics: this.comics,
        }
    }

    static fromPrimitive({
        id,
        name,
        imageUrl,
        description,
        _isFavorite,
        comics,
    }: HeroPrimitiveProps): Hero {
        return new Hero({
            id,
            name,
            imageUrl,
            description,
            _isFavorite,
            comics,
        })
    }
}
