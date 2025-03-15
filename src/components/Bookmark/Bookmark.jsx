import React from 'react';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <div className='p-4 m-4 bg-white shadow-200 rounded-xl'>
            <h3 className='text-2xl'>{title}</h3>   
            </div>
        </div>
        
    );
};

export default Bookmark;