import React, { useState, useEffect } from 'react';

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
            return res.json();
        }).then((data) => {
            console.log('Data sent successfully:', data);
            setDisplayValue('');
            updateWall();
        })
        .catch((err) => {
            console.error('Error sending data:', err);
        })
        setDisplayValue('');
    }

    /**
     * fetches new data from wall, and updates the posts
     */
    const updateWall = () => {

        fetch('http://localhost:4000/blogApp/getFivePosts', {
            method: 'GET'
        })
        .then (res => {
            if(!res.ok){
                throw new Error('Network response was not ok.');
            }
            return res.json();
        }).then((data) => {
            console.log('Data received successfully:', data);
            let newPosts = [];
            for(const key in data){
                newPosts.push(Post(data[key]));
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
                    <div key={index}>{post}</div>
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

    //calls updateWall() on page load, and [] causes it to only be called once. Using Strict mode, components will render twice in dev, and not in prod
    useEffect(() => {
        updateWall()
    }, []);

    return content;
}

export default BlogApp;