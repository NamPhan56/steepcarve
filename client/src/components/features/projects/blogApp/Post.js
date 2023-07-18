
import React, { useState } from 'react';

import '../projects.css';
import './blog.css';

const Post = (data) => {

    const content = (
        <div className="page">
            <div className="blog-post">
                <p>
                    {data.message}
                </p>
            </div>
            <br/>
        </div>
    )

    return content;
}

export default Post;