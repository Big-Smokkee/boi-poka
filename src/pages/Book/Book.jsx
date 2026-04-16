import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Book = ({ book }) => {
    const { tags, bookId } = book;
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card  shadow-sm border border-[#13131315]  rounded-2xl ">
                <div className='mt-6'>
                    <figure className='mb-6 bg-cover w-2/3 bg-[#F3F3F3] mx-auto p-5 rounded-2xl'>
                        <img
                            src={book.image}
                            alt="Book image" className='h-42' />
                    </figure>

                </div>
                <div className="flex">
                    {
                        tags.map((tag, index) => <span className='px-4 py-2 text-[16px] text-[#23BE0A]' key={index}>{tag}</span>)
                    }
                </div>
                <div className="card-body">
                    <h2 className="playfair font-bold text-2xl">
                        {book.bookName}
                    </h2>
                    <p>By : {book.author}</p>
                    <div className='border border-dashed border-[#13131315]'>

                    </div>
                    <div className="text-regular flex justify-between item-center mt-10">
                        <div className=" ">{book.category}</div>
                        <div className=" flex justify-between items-center">
                            <p>{book.rating}</p>
                            <span>
                                <Star size={16}></Star>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;