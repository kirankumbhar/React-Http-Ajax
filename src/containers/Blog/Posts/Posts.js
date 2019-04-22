import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import Post from '../../../components/Post/Post';
class posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
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
            return (
                <Link to={'/' + post.id} key = {post.id}>
                    <Post 
                        clicked = {() => this.postSelector(post.id)}  
                        title = {post.title} 
                        author = {post.author}
                    />
                </Link>

            ); 

        });
        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default posts;