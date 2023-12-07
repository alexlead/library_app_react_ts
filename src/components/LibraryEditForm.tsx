import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Book } from '../redux/book/bookState';


interface IForm {
    book: Book
    handleEditForm: (getBook: Book)=>void
}



const LibraryEditForm = ( {handleEditForm, book}:IForm ):JSX.Element => {

    const [title, setTitle] = useState<string>("")
    const [author, setAuthor] = useState<string>("")
    const [year, setYear] = useState<number>(0)
    const [isbn, setIsbn ] = useState<string>("");
    const [buttonTitle, setbuttonTitle ] = useState<string>("Add");


    useEffect(() => {
     
        setTitle(book.title);
        setAuthor(book.author);
        setIsbn(book.isbn);
        setYear(book.year);
        setbuttonTitle("Add");
        if( isbn !== "" ) {
            setbuttonTitle("Update");

        }

    }, [book])
    

    const dispatch = useDispatch();

    const handleSubmit: any =(event: React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault();
        
        if( isbn === "") {
            dispatch({ type:"book/add" , payload: {title, author, year} });
        } else {
            dispatch({ type:"book/edit" , payload: {title, author, year, isbn} });         
        }
        setTitle("");
        setAuthor("");
        setYear(0);
        handleEditForm( {title:"", author:"", isbn:"", year:0}  );
    }
    
    const cancelSubmit = () => {        
        setTitle("");
        setAuthor("");
        setYear(0);
        handleEditForm( {title:"", author:"", isbn:"", year:0}  );
    }

  return (
    <form onSubmit={ (event)=> handleSubmit(event) }>
        <table>
            <tr>
                <td>Title</td>
                <td><input type="text" onChange={ (e:ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} value={title}/></td>
            </tr>
            <tr>
                <td>Author</td>
                <td><input type="text" onChange={ (e:ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)} value={author} /></td>
            </tr>
            <tr>
                <td>Year</td>
                <td><input type="text" onChange={ (e:ChangeEvent<HTMLInputElement>) => setYear(+e.target.value)} value={year}/></td>
            </tr>
            <tr>
                <td></td>
                <td><button type='submit'>{buttonTitle}</button> <button type='button' onClick={cancelSubmit}>Cancel</button></td>
            </tr>
        </table>
    </form>
  )
}

export default LibraryEditForm