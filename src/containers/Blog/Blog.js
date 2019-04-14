import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts});
            });
    }
    postSelector= (id) => {
        this.setState({selectedPostId: id});
    }

    render () {
        const posts = this.state.posts.map(post => {
            return <Post clicked = {() => this.postSelector(post.id)} key = {post.id} title = {post.title} author = {post.author}/>
        });
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
                <section className="Posts">
                    {posts}
                </section>
                
            </div>
        );
    }
}

export default Blog;