import React, { useState } from 'react'
import LibraryEditForm from './LibraryEditForm'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import LibraryBooksList from './LibraryBooksList'
import { Book } from '../redux/book/bookState'

const Library: React.FC = (): JSX.Element => {

    const bookList = useSelector((state: RootState) => state.book.books)
    
    const [editForm, setEditForm] = useState<boolean>(false);
    const [editBook, setEditBook] = useState<Book>({title:"", author:"", isbn:"", year:0});

    const handleEditForm = ( getBook: Book ):void => {

        setEditBook(getBook);

        setEditForm( !editForm );
    }


    return (
        <div>
            <h1>Library</h1>
            

            {
                editForm !== false ? (

                    <LibraryEditForm handleEditForm={handleEditForm} book={editBook}/>

                ) : (
                <>
                <div className="addNew">
                    <button onClick={ () => handleEditForm( {title:"", author:"", isbn:"", year:0} ) }>Add new</button>
                </div>
                    <div className='bookList'>

                        {
                            bookList &&
                            <LibraryBooksList bookList={bookList} handleEditForm={handleEditForm} />
                            
                        }


                    </div>
                        </>
                )
            }

        </div>
    )
}

export default Library