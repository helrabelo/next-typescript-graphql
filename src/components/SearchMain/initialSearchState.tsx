import { SearchResponse } from '@algolia/client-search'
import { Hit } from './Search'

export const initialSearchState: SearchResponse<Hit>[] = [
  {
    hits: [
      {
        id: 1,
        name: 'Loading...',
        slug: '',
        image: '',
        card_set: '',
        card_set_slug: '',
        objectID: '1',
        _highlightResult: {
          name: {
            value: '',
            matchLevel: 'none',
            matchedWords: []
          }
        }
      }
    ],
    index: 'loading',
    page: 1,
    nbHits: 2,
    nbPages: 2,
    hitsPerPage: 2,
    processingTimeMS: 3,
    exhaustiveNbHits: true,
    query: '',
    params: ''
  }
]
