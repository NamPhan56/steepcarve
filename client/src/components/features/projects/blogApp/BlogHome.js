import '../projects.css';
import './blog.css';
import BlogApp from  './BlogApp.js';

//This is the Blog App's Home Page, also serving as its harness
const BlogHome = () => {
 const content = (
    <div className="page"> 
      <div id="blogApp">
        <header className="header">Blog App</header>
        <p>This is the Blog app.</p>
        <hr/>
        <BlogApp/>
      </div>
    </div>
    )
    return content
}

export default BlogHome;