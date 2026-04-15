import React, { Suspense } from 'react';
import Book from '../Book/Book';
import '../../index.css'
const Books = ({ data }) => {
    // 1ta way
    // const [allBooks, setAllBooks] = useState([]);
    // useEffect(() => {
    //     fetch("https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json").then(res => res.json()).then(res => setAllBooks(res))
    // }, [])
    // console.log(allBooks);

    // 2nd way
    // const bookPromise = fetch("https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json").then(res => res.json())

    return (
        <div className='px-30.5 text-4xl playfair'>
            <h2 className='mb-9 text-center'>Books</h2>
            <Suspense fallback={<span>Loading...</span>}>
                {data.map(book => <Book book={book} key={book.bookId}></Book>)}
            </Suspense>

        </div>
    );
};

export default Books;