
import React, { useState } from 'react';

import '../projects.css';
import './blog.css';

const BlogApp = () => {
    const [displayValue, setDisplayValue] = useState('');

    const handleInputChange = (e) =>{
        setDisplayValue(e.target.value)
    }

    //submit post to be added to the wall
    const handleSubmit = () => {
        setDisplayValue('');
        console.log(displayValue);
    }

    const content = (
        <div className="page">
            <div className="blog-wall">
                <p>
                    This is the Blog's Wall, where posts will show here. Only 5 of the most recent posts will show for now. 
                    Blog posts will completely reset every hour.
                </p>
            </div>
            <br/>
            <form className="input-form">
                <textarea className="input-box" onInput={handleInputChange} autoComplete="off" placeholder="type your post here" value={displayValue ?? ''} type="text" />
                <br/>
            </form>
            <button className="blog-submit-btn" onClick={handleSubmit}>Post</button>


        </div>
    )

    return content;
}

export default BlogApp;