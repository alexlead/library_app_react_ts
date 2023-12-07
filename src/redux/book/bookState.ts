export interface Book {
    isbn: string,
    title: string,
    author: string,
    year: number
}

export interface BookState {
    books: Book[]
}