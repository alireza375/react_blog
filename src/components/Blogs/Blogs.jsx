import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect (() => {
        fetch('public/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    
    return (
        <div className='mx-4 mt-4 md:w-2/3'>
           {
               blogs.map(blog => <Blog 
                key={blog.id} 
                handleAddToBookmark={handleAddToBookmark}
                handleMarkAsRead={handleMarkAsRead}
                blog={blog}></Blog>)
           }
        </div>
    );
};

Blogs.PropTypes = {
    handleAddToBookmark: PropTypes.func
}

export default Blogs;