import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="mt-4 ml-4 md:w-1/3">
            <div className="p-6 m-4 font-bold text-purple-800 bg-white border-2 border-indigo-500 rounded-xl shadow-200">
                <h2 className='text-2xl text-center violet'>Spent time on read: {readingTime} min</h2>
            </div>
            <div className="p-2 m-2 bg-slate-100 rounded-xl">
                <h2 className='text-2xl text-center'>Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map(bookmarks => <Bookmark key={bookmarks.id} bookmark={bookmarks}></Bookmark>)
                }
            </div>
            
        </div>
    );
};

export default Bookmarks;