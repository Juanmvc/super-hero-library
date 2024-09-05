import { HeroProps } from '@/app/core/domain/entities/Hero'

export const mockAdaptedHero: HeroProps = {
    id: 1011334,
    name: '3-D Man',
    imageUrl: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
    description: '',
    _isFavorite: false,
    comics: [
        { title: 'Avengers: The Initiative (2007) #14', id: 21366 },
        {
            title: 'Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)',
            id: 24571,
        },
        { title: 'Avengers: The Initiative (2007) #15', id: 21546 },
        { title: 'Avengers: The Initiative (2007) #16', id: 21741 },
        { title: 'Avengers: The Initiative (2007) #17', id: 21975 },
        { title: 'Avengers: The Initiative (2007) #18', id: 22299 },
        {
            title: 'Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)',
            id: 22300,
        },
        { title: 'Avengers: The Initiative (2007) #19', id: 22506 },
        { title: 'Deadpool (1997) #44', id: 8500 },
        { title: 'Marvel Premiere (1972) #35', id: 10223 },
        { title: 'Marvel Premiere (1972) #36', id: 10224 },
        { title: 'Marvel Premiere (1972) #37', id: 10225 },
    ],
}
