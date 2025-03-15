import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    return (
        <div className='mx-4 mt-4 ml-4 bg-gray-100 md:w-1/3'>
            <h2 className='text-3xl text-center'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmarks => <Bookmark key={bookmarks.id} bookmark={bookmarks}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;