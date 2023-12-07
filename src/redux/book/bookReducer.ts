import { uid } from "uid";
import bookActions from "./bookActions";
import { Book, BookState } from './bookState';

const initialState: BookState = {
    books: [
        {
            title: "In Search of Lost Time",
            author: "Marcel Proust",
            year: 1913,
            isbn: "275132-13"
        },
        {
            title: "Don Quixote",
            author: "Miguel de Cervantes",
            year: 1605,
            isbn: "38473223-13"
        },
        {
            title: "War and Peace",
            author: "Leo Tolstoy",
            year: 1869,
            isbn: "648455-13"
        },
        {
            title: "Hamlet",
            author: "William Shakespeare",
            year: 1870,
            isbn: "7944621-13"
        },
        {
            title: "The Brothers Karamazov",
            author: "Fyodor Dostoyevsky",
            year: 1879,
            isbn: "89454687-13"
        },
        {
            title: "Alice's Adventures in Wonderland",
            author: "Lewis Carroll",
            year: 1865,
            isbn: "4687452-13"
        },
        {
            title: "The Grapes of Wrath",
            author: "John Steinbeck",
            year: 1939,
            isbn: "875641354-13"
        },
    ]
} 

export default function bookReducer ( 
    state: BookState = initialState,
    action: bookActions
): BookState {

    switch (action.type) {
        case 'book/add':
            return {...state, books: [ ...state.books, {...action.payload, isbn: uid() }  ]};
        case 'book/remove':
            return {...state, books: [ ...state.books.filter( item => item.isbn !== action.payload )  ]};
        case 'book/edit':
            return {...state, books: state.books.reduce((acc:Book[], book:Book) => {
                if (book.isbn === action.payload.isbn) {
                  return [...acc, { ...action.payload }]; // меняй любые свойства в объекте
                }
                return [...acc, book];
              }, [])  };
        
        default:
            return state;
    }

} 