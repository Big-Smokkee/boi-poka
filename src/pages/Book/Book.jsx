import { Star } from 'lucide-react';
import React from 'react';

const Book = ({ book }) => {
    const { tags } = book;
    return (
        <div className="card w-96 shadow-sm border border-[#13131315]">
            <figure className='mb-6'>
                <img
                    src={book.image}
                    alt="Book image" className='w-34' />
            </figure>
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
    );
};

export default Book;