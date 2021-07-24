import React,{useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const Books=()=>{

    const [books,obtenerBooks]=useState([]);

    const consultarAPI = async () => {
      const api = await fetch('https://fakerapi.it/api/v1/books?_quantity=5');
      const books = await api.json();
      obtenerBooks(books.data);

      console.log(books.data)

    }

    useEffect(() => {
        consultarAPI()
        
    }, [])

    return(

        <table>
            <tbody>
                {
                    books.map(book => (
                        <>
                        <tr key={book.isbn}>
                            <td>{book.author}</td>
                            <td>{book.genre}</td>
                            <td>{book.published}</td>
                            <td>{book.publisher}</td>
                            <td>{book.title}</td>
                            <td><img src={book.image} width="50px" height="50px"/></td>
                        </tr>
                        </>
                    ))
                }
            </tbody>
        </table>

    );
}

Books.propTypes = {
    books: PropTypes.array.isRequired
}

export default Books;