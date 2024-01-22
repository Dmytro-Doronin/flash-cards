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
  currentPage?: string
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
