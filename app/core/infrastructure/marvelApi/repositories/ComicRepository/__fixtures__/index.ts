import { MarvelComic } from '../../../apiTypes/MarvelComic'

export const mockMarvelComicRepositoryData: MarvelComic = {
    code: 200,
    status: 'Ok',
    copyright: '© 2024 MARVEL',
    attributionText: 'Data provided by Marvel. © 2024 MARVEL',
    attributionHTML:
        '<a href="http://marvel.com">Data provided by Marvel. © 2024 MARVEL</a>',
    etag: 'ffa948c7f1e0f977ff63f56ad57efec617510710',
    data: {
        offset: 0,
        limit: 20,
        total: 1,
        count: 1,
        results: [
            {
                id: 10223,
                digitalId: 46568,
                title: 'Marvel Premiere (1972) #35',
                issueNumber: 35,
                variantDescription: '',
                description: '',
                modified: '2023-04-05T17:42:17-0400',
                isbn: '',
                upc: '',
                diamondCode: '',
                ean: '',
                issn: '',
                format: 'Comic',
                pageCount: 0,
                textObjects: [
                    {
                        type: 'issue_solicit_text',
                        language: 'en-us',
                        text: ' Take a dive into the Marvel Universe of the 1950s! Witness the origin of one of the most bizarre heroes of all time -- the 3-D MAN! ',
                    },
                ],
                resourceURI: 'http://gateway.marvel.com/v1/public/comics/10223',
                urls: [
                    {
                        type: 'detail',
                        url: 'http://marvel.com/comics/issue/10223/marvel_premiere_1972_35?utm_campaign=apiRef&utm_source=3f0fc225b76ebf275551011c200522e3',
                    },
                    {
                        type: 'reader',
                        url: 'http://marvel.com/digitalcomics/view.htm?iid=46568&utm_campaign=apiRef&utm_source=3f0fc225b76ebf275551011c200522e3',
                    },
                ],
                series: {
                    resourceURI:
                        'http://gateway.marvel.com/v1/public/series/2045',
                    name: 'Marvel Premiere (1972 - 1981)',
                },
                variants: [],
                collections: [],
                collectedIssues: [],
                dates: [
                    { type: 'onsaleDate', date: '1977-04-01T00:00:00-0500' },
                    { type: 'focDate', date: '-0001-11-30T00:00:00-0500' },
                    { type: 'unlimitedDate', date: '2023-04-06T00:00:00-0400' },
                ],
                prices: [{ type: 'printPrice', price: 0 }],
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/60/642ddeb849005',
                    extension: 'jpg',
                },
                images: [
                    {
                        path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/60/642ddeb849005',
                        extension: 'jpg',
                    },
                ],
                creators: {
                    available: 6,
                    collectionURI:
                        'http://gateway.marvel.com/v1/public/comics/10223/creators',
                    items: [
                        {
                            resourceURI:
                                'http://gateway.marvel.com/v1/public/creators/1746',
                            name: 'John Costanza',
                            role: 'letterer',
                        },
                        {
                            resourceURI:
                                'http://gateway.marvel.com/v1/public/creators/1220',
                            name: 'Jim Craig',
                            role: 'penciler',
                        },
                        {
                            resourceURI:
                                'http://gateway.marvel.com/v1/public/creators/13094',
                            name: 'Dave Hunt',
                            role: 'inker',
                        },
                        {
                            resourceURI:
                                'http://gateway.marvel.com/v1/public/creators/196',
                            name: 'Jack Kirby',
                            role: 'penciller (cover)',
                        },
                        {
                            resourceURI:
                                'http://gateway.marvel.com/v1/public/creators/10105',
                            name: 'Jorge Maese',
                            role: 'colorist',
                        },
                        {
                            resourceURI:
                                'http://gateway.marvel.com/v1/public/creators/2909',
                            name: 'Roy Thomas',
                            role: 'writer',
                        },
                    ],
                    returned: 6,
                },
                characters: {
                    available: 1,
                    collectionURI:
                        'http://gateway.marvel.com/v1/public/comics/10223/characters',
                    items: [
                        {
                            resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
                            name: '3-D Man',
                        },
                    ],
                    returned: 1,
                },
                stories: {
                    available: 4,
                    collectionURI:
                        'http://gateway.marvel.com/v1/public/comics/10223/stories',
                    items: [
                        {
                            resourceURI:
                                'http://gateway.marvel.com/v1/public/stories/19947',
                            name: 'Cover #19947',
                            type: 'cover',
                        },
                        {
                            resourceURI:
                                'http://gateway.marvel.com/v1/public/stories/19948',
                            name: 'The 3-D Man!',
                            type: 'interiorStory',
                        },
                        {
                            resourceURI:
                                'http://gateway.marvel.com/v1/public/stories/151205',
                            name: 'cover from Marvel Premiere (1972) #35',
                            type: 'cover',
                        },
                        {
                            resourceURI:
                                'http://gateway.marvel.com/v1/public/stories/151206',
                            name: 'story from Marvel Premiere (1972) #35',
                            type: 'interiorStory',
                        },
                    ],
                    returned: 4,
                },
                events: {
                    available: 0,
                    collectionURI:
                        'http://gateway.marvel.com/v1/public/comics/10223/events',
                    items: [],
                    returned: 0,
                },
            },
        ],
    },
}
