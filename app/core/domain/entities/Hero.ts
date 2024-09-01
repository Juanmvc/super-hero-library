import { ComicProps } from './Comic'

export type HeroProps = {
    id: number
    name: string
    imageUrl: string
    description: string
    isFavorite: boolean
    comics: ComicProps[]
}

export type HeroPrimitiveProps = {
    id: number
    name: string
    imageUrl: string
    description: string
    isFavorite: boolean
    comics: ComicProps[]
}

export default class Hero {
    readonly id: number

    readonly name: string

    readonly imageUrl: string

    readonly description: string

    private _isFavorite: boolean

    readonly comics: ComicProps[]

    constructor({
        id,
        name,
        imageUrl,
        description,
        isFavorite,
        comics,
    }: HeroProps) {
        this.id = id
        this.name = name
        this.imageUrl = imageUrl
        this.description = description
        this._isFavorite = isFavorite
        this.comics = comics
    }

    get isFavorite(): boolean {
        return this._isFavorite
    }

    set isFavorite(value: boolean) {
        if (typeof value !== 'boolean') {
            throw new Error('Type for isFavorite must be boolean')
        }
        this._isFavorite = value
    }

    toPrimitive(): HeroPrimitiveProps {
        return {
            id: this.id,
            name: this.name,
            imageUrl: this.imageUrl,
            description: this.description,
            isFavorite: this.isFavorite,
            comics: this.comics,
        }
    }

    static fromPrimitive({
        id,
        name,
        imageUrl,
        description,
        isFavorite,
        comics,
    }: HeroPrimitiveProps): Hero {
        return new Hero({
            id,
            name,
            imageUrl,
            description,
            isFavorite,
            comics,
        })
    }
}
