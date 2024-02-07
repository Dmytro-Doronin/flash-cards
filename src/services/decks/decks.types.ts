export type DeckType = {
  author: {
    id: string
    name: string
  }
  id: string
  userId: string
  name: string
  isPrivate: true
  cover: string
  created: string
  updated: string
  cardsCount: 0
}

export type GetDecksArgs = {
  orderBy?: string
  minCardsCount?: number
  maxCardsCount?: number
  name?: string
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
}

export type DecksResponseType = {
  items: DeckType[]
  pagination: {
    currentPage: number
    itemsPerPage: number
    totalPages: number
    totalItems: number
  }
  maxCardsCount: number
}

export type Tab = 'all' | 'my'

//CARD
export type Card = {
  grade: number
  id: string
  deckId: string
  userId: string
  question: string
  answer: string
  shots: number
  answerImg: string | null
  questionImg: string | null
  questionVideo: string
  answerVideo: string
  created: string
  updated: string
}

export type CardResponseType = {
  pagination: {
    currentPage: number
    itemsPerPage: number
    totalPages: number
    totalItems: number
  }
  items: Card[]
}

export type GetCardsArgs = {
  question?: string
  answer?: string
  orderBy?: string
  currentPage?: number
  itemsPerPage?: number
}

export type CreateCardsType = {
  id: string
  deckId: string
  userId: string
  question: string
  answer: string
  shots: number
  answerImg: string
  questionImg: string
  questionVideo: string
  answerVideo: string
  created: string
  updated: string
}

export type GetLearnDeckType = {
  previousCardId: string
}
