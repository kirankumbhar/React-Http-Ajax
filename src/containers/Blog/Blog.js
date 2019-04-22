import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';

import Posts from '../../containers/Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import './Blog.css';

class Blog extends Component {
    

    render () {
        return (
            <div>
                <header>
                    <nav>
                        <ul className="Posts">
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to={{ 
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true' 
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render = { () => <h1>Home</h1> }/>
                <Route path="/" exact render = { () => <h1>Home</h1> }/> */}
                <Route path="/" exact component = {Posts} />
                <Route path="/new-post" exact component = {NewPost} />
                <Route path="/:id" exact component = {FullPost} />
            </div>
        );
    }
}

export default Blog;