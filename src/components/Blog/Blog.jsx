import PropTypes from 'prop-types';
import { CiBookmark } from 'react-icons/ci';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    // console.log(blog);
    const {title, cover, author, author_img, reading_time,
        hashtags, posted_date} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-12 mt-2' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p className='text-sm'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min reads</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2' >
                        {/* <i class="fa-solid fa-bookmark"></i> */}
                        <CiBookmark />
                    </button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx} className='mr-2'><a href="#">#{hash}</a></span>)
                }
            </p>
            <button 
                onClick={() => handleMarkAsRead(reading_time)}
                className='font-bold text-purple-800 underline'>Mark as read
            </button>
        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}

export default Blog;