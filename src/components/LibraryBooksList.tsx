import React from 'react'
import { BookState, Book } from '../redux/book/bookState';
import { useDispatch } from 'react-redux';

interface IBookList {
  bookList: Book[];
  handleEditForm: (book: Book)=>void;
}


const LibraryBooksList = ({bookList, handleEditForm}: IBookList):JSX.Element => {


  const dispatch = useDispatch();

  const handleRemoveBook = (isbn: string) => {
      dispatch({type: "book/remove" , payload: isbn })
  }

  return (
    <>
    <table className='booksListTable'>
      <thead>
        <tr>
          <td>ISBN</td>
          <td>AUTHOR</td>
          <td>TITLE</td>
          <td>YEAR</td>
          <td>Action</td>

        </tr>
      </thead>
      <tbody>
        {
          bookList?.map((book, index) => ( 
            <tr key={index}>
            <td>{book.isbn}</td>
            <td>{book.author}</td>
            <td>{book.title}</td>
            <td>{book.year}</td>
            <td>
              <button onClick={()=>handleEditForm( book )}>Edit</button>
              <button onClick={()=>handleRemoveBook(book.isbn)} >Remove</button>
            </td>
            </tr>
          ) )
        }

      </tbody>
    </table>

    </>
  )
}

export default LibraryBooksList