import React,{useEffect, useState} from 'react';
import { getBooks } from './api';

const Books=()=>{

    const [books,obtenerBooks]=useState([]);

    useEffect(() => {
        getBooks
        .then(data => obtenerBooks(data))     
    }, [])

    return(
        
        <>
        <h1>Books</h1>
        <table>
            <tbody>
                {
                    books.map(book => (
                        <tr key={book.isbn}>
                            <td>{book.author}</td>
                            <td>{book.genre}</td>
                            <td>{book.published}</td>
                            <td>{book.publisher}</td>
                            <td>{book.title}</td>
                            <td><img src={book.image} width="50px" height="50px"/></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </>

    );
}


export default Books;