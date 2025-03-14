import React, { useEffect, useState } from 'react';
import Blog from '../Bookmarks/Bookmarks';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect (() => {
        fetch('public/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    
    return (
        <div className='md:w-2/3 mx-4'>
            <h3 className='text-4xl'>Blogs: {blogs.length}</h3>
           
        </div>
    );
};

export default Blogs;