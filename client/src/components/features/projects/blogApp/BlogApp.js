import React, { useState } from 'react';

import Post from './Post.js';

import '../projects.css';
import './blog.css';

const BlogApp = () => {
    const [displayValue, setDisplayValue] = useState('');

    const [posts, setPosts] = useState([]);

    const handleInputChange = (e) =>{
        setDisplayValue(e.target.value)
    }

    //submit post to be added to the wall
    const handleSubmit = () => {

        const postOBJ = {
            "message": displayValue,
        };

        fetch('http://localhost:4000/blogApp/createPost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postOBJ)
        })
        .then ((res) => {
            if(!res.ok){
                throw new Error('Network response was not ok.');
            }
            return res.json;
        }).then((data) => {
            console.log('Data sent successfully:', data);
        })
        .catch((err) => {
            console.error('Error sending data:', err);
        })

        setDisplayValue('');

        updateWall();
        //console.log(displayValue);
        
    }

    /**
     * fetches new data from wall, and updates the posts
     */
    const updateWall = () => {

        fetch('http://localhost:4000/blogApp/getFivePosts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then ((res) => {
            console.log(res);
            if(!res.ok){
                throw new Error('Network response was not ok.');
            }
            return res.json;
        }).then((data) => {
            console.log('Data received successfully:', data.post);
            let newPosts = [];
            let jsonData = JSON.stringify(data.post); 
            for(const key in jsonData){
                newPosts.push(new Post(key));
            }
            setPosts(newPosts);
        })
        .catch((err) => {
            console.error('Error receiving data:', err);
        })
    }

    const content = (
        <div className="page">
            <div className="blog-wall">
                <ul>
                    {posts.map((post, index) => (
                    <li key={index}>{post}</li>
                    ))}
                </ul>
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