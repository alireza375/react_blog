import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleAddToBookmark}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect (() => {
        fetch('public/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    
    return (
        <div className='mx-4 md:w-2/3'>
           {
               blogs.map(blog => <Blog 
                key={blog.id} 
                handleAddToBookmark={handleAddToBookmark}
                blog={blog}></Blog>)
           }
        </div>
    );
};

export default Blogs;