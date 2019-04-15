import React, { Component } from 'react';
import Posts from '../../containers/Blog/Posts/Posts';

import './Blog.css';

class Blog extends Component {
    

    render () {
        return (
            <div>
                <header>
                    <nav>
                        <ul className="Posts">
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Posts/>
                
            </div>
        );
    }
}

export default Blog;