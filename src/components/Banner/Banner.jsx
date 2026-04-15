import React from 'react';
import bannerImg from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="hero  min-h-screen playfair ">
            <div className="hero-content  flex-col-reverse lg:flex-row gap-6 md:gap-60 px-30 bg-[#13131305]">
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Books to freshen up your bookshelf
                    </p>
                    <button className="btn bg-[#23BE0A] border-0">View The List</button>
                </div>
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
            </div>
        </div>
    );
};

export default Banner;