type Book = {
    title: string,
    author: string,
    year: number
}

type bookActions =
| { type: "book/add", payload: Book} 
| { type: "book/remove", payload: string}
| { type: "book/edit", payload: {isbn: string, title: string, author: string, year: number } }

export default bookActions;